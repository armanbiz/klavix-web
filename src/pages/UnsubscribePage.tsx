import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Loader2, X } from 'lucide-react';

const UnsubscribePage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://hook.eu2.make.com/xq5yz7mrbcqrqwrqqto6utdz7e31c3e7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          unsubscribedAt: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error('Failed to unsubscribe');
      }

      setShowConfirmation(true);
    } catch (error) {
      console.error('Unsubscribe error:', error);
      alert('There was an error processing your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </button>

        <div className="bg-white/5 p-8 rounded-xl border border-white/10">
          <h1 className="tech-heading text-3xl mb-6">Unsubscribe from Newsletter</h1>
          
          <p className="text-gray-400 mb-8">
            We're sorry to see you go. Enter your email address below to unsubscribe from our newsletter.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Processing...
                </>
              ) : (
                'Unsubscribe'
              )}
            </button>
          </form>
        </div>
        
        {/* Confirmation Modal */}
        {showConfirmation && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-gray-900 p-8 rounded-xl border border-white/10 max-w-md w-full relative animate-scale-in">
              <button 
                onClick={() => navigate('/')}
                className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              
              <h2 className="text-2xl font-semibold mb-4">We're sorry to see you go!</h2>
              <p className="text-gray-300 mb-4">
                You've been unsubscribed and won't receive future newsletters.
              </p>
              <p className="text-gray-300 mb-6">
                Changed your mind? <a href="/newsletter" className="text-blue-400 hover:text-blue-300">Resubscribe</a> anytime.
              </p>
              <p className="text-gray-400 text-sm">
                Thanks for being part of our tech community!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UnsubscribePage;