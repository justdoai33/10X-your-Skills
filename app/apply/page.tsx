'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { formFields } from '@/data/content';

interface FormData {
  name: string;
  email: string;
  codeLink: string;
  brokenProject: string;
  whatToBuild: string;
  roleRanking: string[];
  engineerType: string;
  timeCommitment: string;
  timezone: string;
  anythingElse: string;
}

interface FormErrors {
  [key: string]: string;
}

const STORAGE_KEY = 'redx-application-form';

export default function ApplyPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    codeLink: '',
    brokenProject: '',
    whatToBuild: '',
    roleRanking: [],
    engineerType: '',
    timeCommitment: '',
    timezone: '',
    anythingElse: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const hasLoadedStorage = useRef(false);

  // Load from localStorage on mount
  useEffect(() => {
    if (!hasLoadedStorage.current && typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setFormData(parsed);
        } catch (e) {
          console.error('Failed to parse saved form data');
        }
      }
      hasLoadedStorage.current = true;
    }
  }, []);

  // Save to localStorage whenever formData changes
  useEffect(() => {
    if (hasLoadedStorage.current && typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
  }, [formData]);

  const validateField = (name: string, value: string | string[]): string => {
    switch (name) {
      case 'name':
        return value ? '' : 'Name is required';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value as string) ? '' : 'Valid email is required';
      case 'codeLink':
        try {
          new URL(value as string);
          return '';
        } catch {
          return 'Valid URL is required';
        }
      case 'brokenProject':
        const len1 = (value as string).length;
        if (len1 < 50) return `At least 50 characters required (${len1}/50)`;
        if (len1 > 1500) return `Maximum 1500 characters (${len1}/1500)`;
        return '';
      case 'whatToBuild':
        const len2 = (value as string).length;
        if (len2 < 50) return `At least 50 characters required (${len2}/50)`;
        if (len2 > 1000) return `Maximum 1000 characters (${len2}/1000)`;
        return '';
      case 'roleRanking':
        if ((value as string[]).length !== 3) {
          return 'Please rank exactly 3 roles';
        }
        return '';
      case 'engineerType':
        return value ? '' : 'Please select one option';
      case 'timeCommitment':
        return value ? '' : 'Please answer this question';
      case 'timezone':
        return value ? '' : 'Please select your timezone';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error for this field
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const handleRoleClick = (roleId: string) => {
    const currentRanking = [...formData.roleRanking];
    const index = currentRanking.indexOf(roleId);

    if (index > -1) {
      // Remove if already selected
      currentRanking.splice(index, 1);
    } else if (currentRanking.length < 3) {
      // Add if less than 3 selected
      currentRanking.push(roleId);
    }

    setFormData(prev => ({ ...prev, roleRanking: currentRanking }));

    if (errors.roleRanking) {
      const newErrors = { ...errors };
      delete newErrors.roleRanking;
      setErrors(newErrors);
    }
  };

  const moveRoleUp = (index: number) => {
    if (index === 0) return;
    const newRanking = [...formData.roleRanking];
    [newRanking[index - 1], newRanking[index]] = [newRanking[index], newRanking[index - 1]];
    setFormData(prev => ({ ...prev, roleRanking: newRanking }));
  };

  const moveRoleDown = (index: number) => {
    if (index === formData.roleRanking.length - 1) return;
    const newRanking = [...formData.roleRanking];
    [newRanking[index], newRanking[index + 1]] = [newRanking[index + 1], newRanking[index]];
    setFormData(prev => ({ ...prev, roleRanking: newRanking }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Validate all fields
    const newErrors: FormErrors = {};
    (Object.keys(formData) as Array<keyof FormData>).forEach(key => {
      if (key !== 'anythingElse') { // anythingElse is optional
        const error = validateField(key, formData[key]);
        if (error) {
          newErrors[key] = error;
        }
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Focus first error
      const firstErrorField = Object.keys(newErrors)[0];
      const element = document.getElementById(firstErrorField);
      element?.focus();
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulated submission - just log and store locally
      console.log('Form submitted:', formData);
      localStorage.setItem('redx-submission', JSON.stringify({
        ...formData,
        submittedAt: new Date().toISOString(),
      }));

      // Clear the form data from storage
      localStorage.removeItem(STORAGE_KEY);

      setIsSubmitted(true);
    } catch (error) {
      setSubmitError('Submission failed. Please try again. Your answers have been preserved.');
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="page-container hero">
        <header className="site-header">
          <div className="container-narrow">
            <Link href="/" className="logo">
              10X-your-Skills
            </Link>
          </div>
        </header>

        <main className="main-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem' }}>
          <div className="text-center" style={{ maxWidth: '36rem' }}>
            <div className="form-success" style={{ marginBottom: '2rem' }}>
              <div style={{
                width: '5rem',
                height: '5rem',
                background: '#DCFCE7',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem'
              }}>
                <svg style={{ width: '2.5rem', height: '2.5rem', color: '#16A34A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '1rem' }}>Application received</h1>
            </div>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-light)', marginBottom: '1rem' }}>
              Your application has been submitted successfully.
            </p>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-light)', marginBottom: '3rem' }}>
              If we move forward, you'll hear from us. If not, silence is the answer.
            </p>
            <Link href="/" className="btn-primary">
              Back to home
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const availableRoles = formFields.roleOptions.filter(
    role => !formData.roleRanking.includes(role.id)
  );

  return (
    <div className="page-container hero">
      <header className="site-header">
        <div className="container-narrow" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" className="logo">
            10X-your-Skills
          </Link>
          <Link href="/" style={{ color: 'var(--color-text-light)', textDecoration: 'none', transition: 'color 0.15s' }}>
            ← Back
          </Link>
        </div>
      </header>

      <main className="main-content" style={{ padding: '4rem 0' }}>
        <div className="container-narrow">
          <div style={{
            background: 'var(--color-white)',
            borderRadius: 'var(--radius-2xl)',
            boxShadow: 'var(--shadow-lg)',
            padding: '2rem'
          }}>
            <h1 style={{ fontSize: 'var(--font-size-4xl)', fontWeight: 700, marginBottom: 'var(--space-xs)' }}>{formFields.title}</h1>
            <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-light)', marginBottom: 'var(--space-2xl)' }}>
              Nine fields. Keep it direct.
            </p>

            {submitError && (
              <div className="form-error">
                <p className="form-error-title">Error</p>
                <p className="form-error-item">{submitError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {/* Name */}
              <div className="form-group">
                <label htmlFor="name" className="form-label form-label-required">
                  1. Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input ${errors.name ? 'form-input-error' : ''}`}
                  style={errors.name ? { borderColor: '#FCA5A5', background: '#FEF2F2' } : {}}
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="form-error-item" style={{ marginTop: 'var(--space-xs)' }} role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="email" className="form-label form-label-required">
                  2. Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  style={errors.email ? { borderColor: '#FCA5A5', background: '#FEF2F2' } : {}}
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="form-error-item" style={{ marginTop: 'var(--space-xs)' }} role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Code Link */}
              <div className="form-group">
                <label htmlFor="codeLink" className="form-label form-label-required">
                  3. Link to code you've written
                </label>
                <p className="form-helper">Repo, live project, or hosted work</p>
                <input
                  type="url"
                  id="codeLink"
                  name="codeLink"
                  value={formData.codeLink}
                  onChange={handleChange}
                  placeholder="https://"
                  className="form-input"
                  style={errors.codeLink ? { borderColor: '#FCA5A5', background: '#FEF2F2' } : {}}
                  aria-required="true"
                  aria-invalid={!!errors.codeLink}
                  aria-describedby={errors.codeLink ? 'codeLink-error' : undefined}
                />
                {errors.codeLink && (
                  <p id="codeLink-error" className="form-error-item" style={{ marginTop: 'var(--space-xs)' }} role="alert">
                    {errors.codeLink}
                  </p>
                )}
              </div>

              {/* Broken Project */}
              <div className="form-group">
                <label htmlFor="brokenProject" className="form-label form-label-required">
                  4. Tell us about something you built that broke, and what you did about it
                </label>
                <p className="form-helper">
                  50–1500 characters ({formData.brokenProject.length}/1500)
                </p>
                <textarea
                  id="brokenProject"
                  name="brokenProject"
                  value={formData.brokenProject}
                  onChange={handleChange}
                  rows={8}
                  className="form-textarea"
                  style={errors.brokenProject ? { borderColor: '#FCA5A5', background: '#FEF2F2' } : {}}
                  aria-required="true"
                  aria-invalid={!!errors.brokenProject}
                  aria-describedby={errors.brokenProject ? 'brokenProject-error' : undefined}
                />
                {errors.brokenProject && (
                  <p id="brokenProject-error" className="form-error-item" style={{ marginTop: 'var(--space-xs)' }} role="alert">
                    {errors.brokenProject}
                  </p>
                )}
              </div>

              {/* What to Build */}
              <div className="form-group">
                <label htmlFor="whatToBuild" className="form-label form-label-required">
                  5. What do you want to build?
                </label>
                <p className="form-helper">
                  50–1000 characters ({formData.whatToBuild.length}/1000)
                </p>
                <textarea
                  id="whatToBuild"
                  name="whatToBuild"
                  value={formData.whatToBuild}
                  onChange={handleChange}
                  rows={6}
                  className="form-textarea"
                  style={errors.whatToBuild ? { borderColor: '#FCA5A5', background: '#FEF2F2' } : {}}
                  aria-required="true"
                  aria-invalid={!!errors.whatToBuild}
                  aria-describedby={errors.whatToBuild ? 'whatToBuild-error' : undefined}
                />
                {errors.whatToBuild && (
                  <p id="whatToBuild-error" className="form-error-item" style={{ marginTop: 'var(--space-xs)' }} role="alert">
                    {errors.whatToBuild}
                  </p>
                )}
              </div>

              {/* Role Ranking */}
              <div className="form-group">
                <fieldset>
                  <legend className="form-label form-label-required">
                    6. Rank your role preferences
                  </legend>
                  <p className="form-helper" style={{ marginBottom: 'var(--space-md)' }}>
                    Select exactly 3 roles in order of preference. Click to select, use arrow buttons to reorder.
                  </p>

                  {/* Selected roles with reordering */}
                  {formData.roleRanking.length > 0 && (
                    <div style={{
                      marginBottom: 'var(--space-md)',
                      padding: 'var(--space-md)',
                      border: '1px solid var(--color-border)',
                      background: 'var(--color-bg-alt)',
                      borderRadius: 'var(--radius-lg)'
                    }} role="list" aria-label="Selected roles in order">
                      <p style={{ fontWeight: 600, marginBottom: 'var(--space-sm)' }}>Your ranking:</p>
                      {formData.roleRanking.map((roleId, index) => {
                        const role = formFields.roleOptions.find(r => r.id === roleId);
                        return (
                          <div
                            key={roleId}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 'var(--space-sm)',
                              marginBottom: 'var(--space-xs)',
                              padding: 'var(--space-sm)',
                              border: '1px solid var(--color-border)',
                              background: 'var(--color-white)',
                              borderRadius: 'var(--radius-lg)'
                            }}
                            role="listitem"
                          >
                            <span style={{ fontWeight: 700, minWidth: '2rem' }}>{index + 1}.</span>
                            <span style={{ flexGrow: 1 }}>{role?.label}</span>
                            <div style={{ display: 'flex', gap: 'var(--space-xs)' }}>
                              <button
                                type="button"
                                onClick={() => moveRoleUp(index)}
                                disabled={index === 0}
                                style={{
                                  padding: '0.25rem 0.75rem',
                                  border: '1px solid var(--color-border)',
                                  background: 'var(--color-white)',
                                  borderRadius: 'var(--radius-sm)',
                                  cursor: index === 0 ? 'not-allowed' : 'pointer',
                                  opacity: index === 0 ? 0.3 : 1
                                }}
                                aria-label={`Move ${role?.label} up`}
                              >
                                ↑
                              </button>
                              <button
                                type="button"
                                onClick={() => moveRoleDown(index)}
                                disabled={index === formData.roleRanking.length - 1}
                                style={{
                                  padding: '0.25rem 0.75rem',
                                  border: '1px solid var(--color-border)',
                                  background: 'var(--color-white)',
                                  borderRadius: 'var(--radius-sm)',
                                  cursor: index === formData.roleRanking.length - 1 ? 'not-allowed' : 'pointer',
                                  opacity: index === formData.roleRanking.length - 1 ? 0.3 : 1
                                }}
                                aria-label={`Move ${role?.label} down`}
                              >
                                ↓
                              </button>
                              <button
                                type="button"
                                onClick={() => handleRoleClick(roleId)}
                                style={{
                                  padding: '0.25rem 0.75rem',
                                  border: '1px solid #FCA5A5',
                                  background: 'var(--color-white)',
                                  color: '#DC2626',
                                  borderRadius: 'var(--radius-sm)',
                                  cursor: 'pointer'
                                }}
                                aria-label={`Remove ${role?.label}`}
                              >
                                ✕
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Available roles */}
                  {availableRoles.length > 0 && (
                    <div role="group" aria-label="Available roles">
                      <p style={{ fontWeight: 600, marginBottom: 'var(--space-xs)' }}>
                        {formData.roleRanking.length === 0 ? 'Select 3 roles:' : 'Available roles:'}
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
                        {availableRoles.map(role => (
                          <button
                            key={role.id}
                            type="button"
                            onClick={() => handleRoleClick(role.id)}
                            style={{
                              width: '100%',
                              textAlign: 'left',
                              padding: 'var(--space-md)',
                              border: '1px solid var(--color-border)',
                              background: 'var(--color-white)',
                              borderRadius: 'var(--radius-lg)',
                              cursor: 'pointer',
                              transition: 'all 0.15s'
                            }}
                          >
                            {role.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {errors.roleRanking && (
                    <p id="roleRanking-error" className="form-error-item" style={{ marginTop: 'var(--space-xs)' }} role="alert">
                      {errors.roleRanking}
                    </p>
                  )}
                </fieldset>
              </div>

              {/* Engineer Type */}
              <div className="form-group">
                <fieldset>
                  <legend className="form-label form-label-required">
                    7. {formFields.engineerQuestion.label}
                  </legend>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
                    {formFields.engineerQuestion.options.map((option, index) => (
                      <label
                        key={index}
                        style={{
                          display: 'block',
                          padding: 'var(--space-md)',
                          border: formData.engineerType === option ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                          background: formData.engineerType === option ? '#EEF2FF' : 'var(--color-white)',
                          borderRadius: 'var(--radius-lg)',
                          cursor: 'pointer',
                          transition: 'all 0.15s'
                        }}
                      >
                        <input
                          type="radio"
                          name="engineerType"
                          value={option}
                          checked={formData.engineerType === option}
                          onChange={() => handleRadioChange('engineerType', option)}
                          className="visually-hidden"
                          aria-required="true"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                  {errors.engineerType && (
                    <p id="engineerType-error" className="form-error-item" style={{ marginTop: 'var(--space-xs)' }} role="alert">
                      {errors.engineerType}
                    </p>
                  )}
                </fieldset>
              </div>

              {/* Time Commitment */}
              <div className="form-group">
                <fieldset>
                  <legend className="form-label form-label-required">
                    8. Can you commit ~12 hours a week for 12 weeks?
                  </legend>

                  <div style={{ marginBottom: 'var(--space-md)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)', marginBottom: 'var(--space-md)' }}>
                      {['Yes', 'No'].map((option) => (
                        <label
                          key={option}
                          style={{
                            display: 'block',
                            padding: 'var(--space-md)',
                            border: formData.timeCommitment === option ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                            background: formData.timeCommitment === option ? '#EEF2FF' : 'var(--color-white)',
                            borderRadius: 'var(--radius-lg)',
                            cursor: 'pointer',
                            transition: 'all 0.15s'
                          }}
                        >
                          <input
                            type="radio"
                            name="timeCommitment"
                            value={option}
                            checked={formData.timeCommitment === option}
                            onChange={() => handleRadioChange('timeCommitment', option)}
                            className="visually-hidden"
                            aria-required="true"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <label htmlFor="timezone" className="form-label form-label-required">
                    Timezone
                  </label>
                  <select
                    id="timezone"
                    name="timezone"
                    value={formData.timezone}
                    onChange={handleChange}
                    className="form-select"
                    style={errors.timezone ? { borderColor: '#FCA5A5', background: '#FEF2F2' } : {}}
                    aria-required="true"
                    aria-invalid={!!errors.timezone}
                    aria-describedby={errors.timezone ? 'timezone-error' : undefined}
                  >
                    <option value="">Select timezone</option>
                    <option value="UTC-12">UTC-12</option>
                    <option value="UTC-11">UTC-11</option>
                    <option value="UTC-10">UTC-10</option>
                    <option value="UTC-9">UTC-9</option>
                    <option value="UTC-8">UTC-8 (PST)</option>
                    <option value="UTC-7">UTC-7 (MST)</option>
                    <option value="UTC-6">UTC-6 (CST)</option>
                    <option value="UTC-5">UTC-5 (EST)</option>
                    <option value="UTC-4">UTC-4</option>
                    <option value="UTC-3">UTC-3</option>
                    <option value="UTC-2">UTC-2</option>
                    <option value="UTC-1">UTC-1</option>
                    <option value="UTC+0">UTC+0 (GMT)</option>
                    <option value="UTC+1">UTC+1 (CET)</option>
                    <option value="UTC+2">UTC+2</option>
                    <option value="UTC+3">UTC+3</option>
                    <option value="UTC+4">UTC+4</option>
                    <option value="UTC+5">UTC+5</option>
                    <option value="UTC+5.5">UTC+5:30 (IST)</option>
                    <option value="UTC+6">UTC+6</option>
                    <option value="UTC+7">UTC+7</option>
                    <option value="UTC+8">UTC+8</option>
                    <option value="UTC+9">UTC+9</option>
                    <option value="UTC+10">UTC+10</option>
                    <option value="UTC+11">UTC+11</option>
                    <option value="UTC+12">UTC+12</option>
                  </select>
                  {errors.timezone && (
                    <p id="timezone-error" className="form-error-item" style={{ marginTop: 'var(--space-xs)' }} role="alert">
                      {errors.timezone}
                    </p>
                  )}
                  {errors.timeCommitment && (
                    <p id="timeCommitment-error" className="form-error-item" style={{ marginTop: 'var(--space-xs)' }} role="alert">
                      {errors.timeCommitment}
                    </p>
                  )}
                </fieldset>
              </div>

              {/* Anything Else */}
              <div className="form-group" style={{ marginBottom: 'var(--space-2xl)' }}>
                <label htmlFor="anythingElse" className="form-label">
                  9. Anything else we should know?
                </label>
                <p className="form-helper">Optional</p>
                <textarea
                  id="anythingElse"
                  name="anythingElse"
                  value={formData.anythingElse}
                  onChange={handleChange}
                  rows={4}
                  className="form-textarea"
                />
              </div>

              {/* Submit Button */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-submit"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit application'}
                </button>
                <p className="form-helper">
                  <span style={{ color: '#DC2626' }}>*</span> Required field
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
