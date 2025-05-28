import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = ({ onLogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    if (username === 'Admin' && password === 'Admin@123') {
      onLogin();
      navigate('/admin/dashboard');
    } else {
      setError('Invalid username or password');
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
        padding: '2.5rem',
        borderRadius: '1rem',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
        width: '100%',
        maxWidth: '28rem',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        ':hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)'
        }
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '2.5rem'
        }}>
          <div style={{
            marginBottom: '1.5rem',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z" fill="#667EEA"/>
              <path d="M12 6C8.686 6 6 8.686 6 12C6 15.314 8.686 18 12 18C15.314 18 18 15.314 18 12C18 8.686 15.314 6 12 6Z" fill="white"/>
              <path d="M12 10C10.895 10 10 10.895 10 12C10 13.105 10.895 14 12 14C13.105 14 14 13.105 14 12C14 10.895 13.105 10 12 10Z" fill="#667EEA"/>
            </svg>
          </div>
          <h1 style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            color: '#1a365d',
            marginBottom: '0.5rem',
            letterSpacing: '-0.025em'
          }}>
            Admin Dashboard
          </h1>
          <p style={{
            color: '#718096',
            fontSize: '0.9375rem',
            lineHeight: '1.5'
          }}>
            Enter your credentials to access the admin panel
          </p>
        </div>

        {error && (
          <div style={{
            backgroundColor: '#FEF2F2',
            color: '#DC2626',
            padding: '0.875rem',
            borderRadius: '0.5rem',
            marginBottom: '1.5rem',
            fontSize: '0.875rem',
            border: '1px solid #FECACA',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'shake 0.5s ease-in-out'
          }}>
            <svg style={{ marginRight: '0.5rem', flexShrink: 0 }} width="1.25rem" height="1.25rem" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label
              htmlFor="username"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#2D3748'
              }}
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '0.5rem',
                border: '1px solid #E2E8F0',
                fontSize: '0.9375rem',
                transition: 'all 0.2s ease',
                outline: 'none',
                backgroundColor: '#F7FAFC',
                ':focus': {
                  borderColor: '#667EEA',
                  boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.2)',
                  backgroundColor: 'white'
                }
              }}
              placeholder="admin"
              required
            />
          </div>

          <div style={{ marginBottom: '1.75rem' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.5rem'
            }}>
              <label
                htmlFor="password"
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#2D3748'
                }}
              >
                Password
              </label>
            </div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '0.5rem',
                border: '1px solid #E2E8F0',
                fontSize: '0.9375rem',
                transition: 'all 0.2s ease',
                outline: 'none',
                backgroundColor: '#F7FAFC',
                ':focus': {
                  borderColor: '#667EEA',
                  boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.2)',
                  backgroundColor: 'white'
                }
              }}
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '0.875rem',
              backgroundColor: '#667EEA',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              fontSize: '0.9375rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              ':hover': {
                backgroundColor: '#5A67D8'
              },
              ':disabled': {
                opacity: '0.7',
                cursor: 'not-allowed'
              }
            }}
          >
            {isLoading ? (
              <>
                <svg style={{ marginRight: '0.5rem', animation: 'spin 1s linear infinite' }} width="1rem" height="1rem" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25"></circle>
                  <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing in...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: '#F7FAFC',
          borderRadius: '0.5rem',
          fontSize: '0.8125rem',
          color: '#718096',
          textAlign: 'center',
          border: '1px dashed #E2E8F0'
        }}>
          <div style={{ fontWeight: '500', marginBottom: '0.25rem' }}>Demo Credentials</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#4A5568' }}>Username</div>
              <div style={{ fontWeight: '600' }}>Admin</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#4A5568' }}>Password</div>
              <div style={{ fontWeight: '600' }}>Admin@123</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-4px); }
          40%, 80% { transform: translateX(4px); }
        }
      `}</style>
    </div>
  );
};

export default AdminLogin;