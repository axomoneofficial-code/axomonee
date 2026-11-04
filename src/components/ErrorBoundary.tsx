import { Component, ErrorInfo, ReactNode } from 'react';
import { reportError } from '../utils/errorReporting';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    reportError(error, {
      category: 'render',
      componentStack: errorInfo.componentStack || undefined,
    });
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.reload();
  };

  private handleGoHome = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div
          role="alert"
          style={{
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem 1rem',
            background: 'var(--cream-bg, #FDFBF7)',
          }}
        >
          <div
            style={{
              maxWidth: '540px',
              width: '100%',
              background: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid #E2E8F0',
              borderTop: '4px solid var(--gamusa-red, #DC2626)',
              padding: '2.5rem 2rem',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: '#FEE2E2',
                color: '#DC2626',
                marginBottom: '1.25rem',
              }}
            >
              <AlertTriangle size={28} />
            </div>

            <h2
              style={{
                fontSize: '1.45rem',
                fontWeight: 800,
                color: '#1E293B',
                marginBottom: '0.5rem',
              }}
            >
              Something unexpected happened
            </h2>
            <p
              style={{
                fontSize: '0.95rem',
                color: '#64748B',
                marginBottom: '1.75rem',
                lineHeight: 1.5,
              }}
            >
              কিছু অনাকাংক্ষিত আসোঁৱাহ ঘটিছে। পৃষ্ঠাটো পুনৰ লোড কৰক অথবা মূল পৃষ্ঠালৈ যাওক।
            </p>

            <div
              style={{
                display: 'flex',
                gap: '0.75rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <button
                onClick={this.handleReset}
                className="btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1.25rem',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                }}
              >
                <RotateCcw size={16} /> Reload Page
              </button>
              <button
                onClick={this.handleGoHome}
                className="btn-outline"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1.25rem',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                }}
              >
                <Home size={16} /> Back to Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
