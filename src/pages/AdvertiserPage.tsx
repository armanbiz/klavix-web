import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Loader2, X } from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  websiteUrl: string;
  description: string;
  goals: string;
  targetAudience: string;
  budget: string;
  startDate: string;
  duration: string;
  customDuration?: string;
  notes: string;
  referralSource?: string;
}

const AdvertiserPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    websiteUrl: '',
    description: '',
    goals: '',
    targetAudience: '',
    budget: '',
    startDate: '',
    duration: '',
    notes: '',
    referralSource: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://hook.eu2.make.com/aiult16twbfcdvnv6si9l4f96qv9pofc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          duration: formData.duration === 'Custom' ? formData.customDuration : formData.duration,
          submittedAt: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setShowConfirmation(true);
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error processing your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </button>

        <div className="bg-white/5 p-8 rounded-xl border border-white/10">
          <h1 className="tech-heading text-3xl mb-6">Advertise in Our Newsletter</h1>
          
          <p className="text-gray-400 mb-8">
            Reach our engaged audience of tech professionals and decision-makers. Complete the form below to get started.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="websiteUrl" className="block text-sm font-medium mb-2">
                Company Website URL *
              </label>
              <input
                type="url"
                id="websiteUrl"
                name="websiteUrl"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                value={formData.websiteUrl}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-2">
                Brief Description of Product/Service *
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="A short summary of what you offer or want to advertise."
              />
            </div>

            <div>
              <label htmlFor="goals" className="block text-sm font-medium mb-2">
                Advertising Goals *
              </label>
              <textarea
                id="goals"
                name="goals"
                required
                rows={3}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                value={formData.goals}
                onChange={handleInputChange}
                placeholder="What do you hope to achieve—brand awareness, signups, sales, etc?"
              />
            </div>

            <div>
              <label htmlFor="targetAudience" className="block text-sm font-medium mb-2">
                Target Audience *
              </label>
              <textarea
                id="targetAudience"
                name="targetAudience"
                required
                rows={3}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                value={formData.targetAudience}
                onChange={handleInputChange}
                placeholder="A description of who the ad is meant to reach."
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="budget" className="block text-sm font-medium mb-2">
                  Budget Range *
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  className="w-full px-4 py-3 border border-white/20 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-white bg-[#262626]"
                  value={formData.budget}
                  onChange={handleInputChange}
                >
                  <option value="">Select a range</option>
                  <option value="$500-$1000">$500-$1000</option>
                  <option value="$1000-$2500">$1000-$2500</option>
                  <option value="$2500-$5000">$2500-$5000</option>
                  <option value="$5000+">$5000+</option>
                </select>
              </div>

              <div>
                <label htmlFor="startDate" className="block text-sm font-medium mb-2">
                  Desired Start Date *
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  value={formData.startDate}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="duration" className="block text-sm font-medium mb-2">
                Duration of Campaign *
              </label>
              <select
                id="duration"
                name="duration"
                required
                className="w-full px-4 py-3 border border-white/20 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-white bg-[#262626]"
                value={formData.duration}
                onChange={handleInputChange}
              >
                <option value="">Select duration</option>
                <option value="1 week">1 week</option>
                <option value="2 weeks">2 weeks</option>
                <option value="1 month">1 month</option>
                <option value="3 months">3 months</option>
                <option value="Custom">Custom</option>
              </select>
              
              {formData.duration === 'Custom' && (
                <input
                  type="text"
                  id="customDuration"
                  name="customDuration"
                  placeholder="Enter custom duration"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-500 transition-colors mt-2"
                  value={formData.customDuration}
                  onChange={handleInputChange}
                />
              )}
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium mb-2">
                Additional Notes or Questions
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                value={formData.notes}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="referralSource" className="block text-sm font-medium mb-2">
                How Did You Hear About Us?
              </label>
              <input
                type="text"
                id="referralSource"
                name="referralSource"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                value={formData.referralSource}
                onChange={handleInputChange}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Advertising Request'
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
              
              <h2 className="text-2xl font-semibold mb-4">Thank You for Your Interest!</h2>
              <p className="text-gray-300 mb-4">
                We've received your advertising request and will review it shortly. Our team will contact you within 1-2 business days.
              </p>
              <p className="text-gray-400 text-sm">
                If you have any immediate questions, please contact us at arman@klavix-ai.com
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdvertiserPage;