import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';

const NewsletterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    name: '',
    email: ''
  });
  const [showConfirmation, setShowConfirmation] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://hook.eu2.make.com/y4e5mkuh3d3pqubghwvkijnwj1fae5v0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subscribedAt: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      setShowConfirmation(true);
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error. Please try again.');
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
          <h1 className="tech-heading text-3xl mb-6">Subscribe to Our Newsletter</h1>
          
          <p className="text-gray-400 mb-8">
            Get the AI edge—stay ahead with the latest tech news, breakthroughs, and insights. Delivered daily. No spam, just smart.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Subscribe to Newsletter
            </button>
          </form>

          <p className="text-sm text-gray-400 mt-6">
            By subscribing, you agree to receive our newsletter. You can <a href="/unsubscribe" className="text-blue-400 hover:text-blue-300">unsubscribe</a> at any time.
          </p>
        </div>
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
            
            <h2 className="text-2xl font-semibold mb-4">🎉 Welcome to Klavix AI Newsletter!</h2>
            <p className="text-gray-300 mb-4">
              Thanks for joining us! Your first AI & tech insights will land soon.
            </p>
            <p className="text-gray-400 text-sm">
              Pro tip: Check your inbox (and spam folder) for our confirmation email.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewsletterPage;