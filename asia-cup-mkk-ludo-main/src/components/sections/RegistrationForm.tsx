"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Award,
  IndianRupee,
  AlertCircle,
  CheckCircle,
  Building2,
  CreditCard,
  Shield,
  Trophy,
  ArrowRight,
  Lock,
  Home,
  Gamepad2,
  Wallet
} from "lucide-react";
import Button from "@/components/ui/Button";

interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  teamName: string;
  teamMembers: number;
  experienceLevel: string;
  preferredSlot: string;
  paymentMethod: string;
  promoCode: string;
  termsAccepted: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export default function RegistrationForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: "", email: "", phone: "", dateOfBirth: "",
    address: "", city: "", state: "", pincode: "",
    teamName: "", teamMembers: 1, experienceLevel: "beginner",
    preferredSlot: "morning", paymentMethod: "online", promoCode: "",
    termsAccepted: false
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string; }>({ type: null, message: "" });
  const [promoDiscount, setPromoDiscount] = useState(0);

  const baseFee = 499;
  const teamMemberBonus = formData.teamMembers > 1 ? (formData.teamMembers - 1) * 50 : 0;
  const totalFee = baseFee + teamMemberBonus - promoDiscount;

  const steps = [
    { number: 1, title: "Personal", icon: User, color: "from-emerald-500 to-teal-500" },
    { number: 2, title: "Address", icon: Home, color: "from-blue-500 to-cyan-500" },
    { number: 3, title: "Tournament", icon: Gamepad2, color: "from-orange-500 to-amber-500" },
    { number: 4, title: "Payment", icon: Wallet, color: "from-purple-500 to-pink-500" }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const applyPromoCode = () => {
    const promoCodes: { [key: string]: number } = { 
      "WELCOME50": 50, 
      "EARLY100": 100, 
      "TEAM200": 200, 
      "MKKLUDO": 75,
      "SUMMER50": 50
    };
    if (formData.promoCode && promoCodes[formData.promoCode.toUpperCase()]) {
      const discountAmount = promoCodes[formData.promoCode.toUpperCase()];
      setPromoDiscount(discountAmount);
      setSubmitStatus({ type: 'success', message: `🎉 Promo code applied! You saved ₹${discountAmount}` });
      setTimeout(() => setSubmitStatus({ type: null, message: "" }), 3000);
    } else if (formData.promoCode) {
      setSubmitStatus({ type: 'error', message: '❌ Invalid promo code' });
      setTimeout(() => setSubmitStatus({ type: null, message: "" }), 3000);
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};
    
    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
      else if (formData.fullName.trim().length < 3) newErrors.fullName = 'Name must be at least 3 characters';
      
      const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!emailRegex.test(formData.email)) newErrors.email = 'Please enter a valid email address';
      
      const phoneRegex = /^[0-9]{10}$/;
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
      else if (!phoneRegex.test(formData.phone)) newErrors.phone = 'Please enter a valid 10-digit phone number';
      
      if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
      else {
        const age = new Date().getFullYear() - new Date(formData.dateOfBirth).getFullYear();
        if (age < 18) newErrors.dateOfBirth = 'You must be at least 18 years old';
      }
    }
    
    if (step === 2) {
      if (!formData.address.trim()) newErrors.address = 'Address is required';
      if (!formData.city.trim()) newErrors.city = 'City is required';
      if (!formData.state.trim()) newErrors.state = 'State is required';
      const pincodeRegex = /^[0-9]{6}$/;
      if (!formData.pincode.trim()) newErrors.pincode = 'Pincode is required';
      else if (!pincodeRegex.test(formData.pincode)) newErrors.pincode = 'Enter a valid 6-digit pincode';
    }
    
    if (step === 3) {
      if (!formData.teamName.trim()) newErrors.teamName = 'Team name is required';
      else if (formData.teamName.trim().length < 3) newErrors.teamName = 'Team name must be at least 3 characters';
    }
    
    if (step === 4) {
      if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;
    
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      const registrationData = {
        id: Date.now(), ...formData, registrationDate: new Date().toISOString(),
        registrationId: `MKK${Date.now()}`, totalAmount: totalFee, discount: promoDiscount
      };
      const registrations = JSON.parse(localStorage.getItem('registrations') || '[]');
      registrations.push(registrationData);
      localStorage.setItem('registrations', JSON.stringify(registrations));
      
      setSubmitStatus({ type: 'success', message: '✅ Registration successful! Redirecting...' });
      setTimeout(() => router.push('/registration-success'), 2000);
    } catch (error) {
      setSubmitStatus({ type: 'error', message: '❌ Registration failed. Please try again.' });
      setTimeout(() => setSubmitStatus({ type: null, message: "" }), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
      {/* Modern Gradient Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 px-6 py-8 md:px-8">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/20 rounded-full blur-3xl" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl">
              <Trophy className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Tournament Registration</h2>
          </div>
          <p className="text-white/90 text-sm md:text-base">Join the biggest Ludo tournament and win exciting prizes worth ₹1,00,000+</p>
        </div>
      </div>

      {/* Step Progress Bar */}
      <div className="px-6 md:px-8 pt-8 pb-4 border-b border-gray-200 bg-gray-50/50">
        <div className="flex justify-between max-w-2xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = currentStep === step.number;
            const isCompleted = currentStep > step.number;
            return (
              <div key={step.number} className="flex-1 text-center relative">
                <div className={`w-12 h-12 mx-auto rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  isActive ? `bg-gradient-to-r ${step.color} text-white shadow-lg scale-110` :
                  isCompleted ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {isCompleted ? <CheckCircle className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                </div>
                <p className={`text-xs mt-2 font-semibold ${isActive ? `text-transparent bg-clip-text bg-gradient-to-r ${step.color}` : 'text-gray-500'}`}>
                  {step.title}
                </p>
                {index < steps.length - 1 && (
                  <div className={`absolute top-6 left-1/2 w-full h-0.5 ${
                    currentStep > step.number ? 'bg-green-500' : 'bg-gray-200'
                  }`} style={{ transform: 'translateX(0%)' }} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-6 md:p-8">
        {/* Status Message */}
        {submitStatus.type && (
          <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
            submitStatus.type === 'success' 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {submitStatus.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
            <span className="text-sm font-medium">{submitStatus.message}</span>
          </div>
        )}

        {/* Step 1: Personal Information */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
              <div className="p-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl">
                <User className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">Personal Information</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input 
                    type="text" 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition text-gray-800 placeholder:text-gray-400 ${
                      errors.fullName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your full name" 
                  />
                </div>
                {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-800 placeholder:text-gray-400 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="your@email.com" 
                  />
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-800 placeholder:text-gray-400 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="8409199953" 
                  />
                </div>
                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input 
                    type="date" 
                    name="dateOfBirth" 
                    value={formData.dateOfBirth} 
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-800 ${
                      errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'
                    }`} 
                  />
                </div>
                {errors.dateOfBirth && <p className="mt-1 text-sm text-red-500">{errors.dateOfBirth}</p>}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Address Information */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                <Home className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">Address Information</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Address <span className="text-red-500">*</span></label>
                <textarea 
                  name="address" 
                  value={formData.address} 
                  onChange={handleChange} 
                  rows={2}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder:text-gray-400 ${
                    errors.address ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full address" 
                />
                {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">City <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  name="city" 
                  value={formData.city} 
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder:text-gray-400 ${
                    errors.city ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="City" 
                />
                {errors.city && <p className="mt-1 text-sm text-red-500">{errors.city}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">State <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  name="state" 
                  value={formData.state} 
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder:text-gray-400 ${
                    errors.state ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="State" 
                />
                {errors.state && <p className="mt-1 text-sm text-red-500">{errors.state}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Pincode <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  name="pincode" 
                  value={formData.pincode} 
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder:text-gray-400 ${
                    errors.pincode ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Pincode" 
                />
                {errors.pincode && <p className="mt-1 text-sm text-red-500">{errors.pincode}</p>}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Tournament Details */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
              <div className="p-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl">
                <Gamepad2 className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">Tournament Details</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Team Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  name="teamName" 
                  value={formData.teamName} 
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800 placeholder:text-gray-400 ${
                    errors.teamName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your team name" 
                />
                {errors.teamName && <p className="mt-1 text-sm text-red-500">{errors.teamName}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Team Members</label>
                <select 
                  name="teamMembers" 
                  value={formData.teamMembers} 
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 text-gray-800 bg-white"
                >
                  <option value={1}>1 Player (Solo) - ₹{baseFee}</option>
                  <option value={2}>2 Players (Duo) - ₹{baseFee + 50}</option>
                  <option value={4}>4 Players (Team) - ₹{baseFee + 150}</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Experience Level</label>
                <select 
                  name="experienceLevel" 
                  value={formData.experienceLevel} 
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 text-gray-800 bg-white"
                >
                  <option value="beginner">🌟 Beginner</option>
                  <option value="intermediate">⚡ Intermediate</option>
                  <option value="advanced">🎯 Advanced</option>
                  <option value="professional">🏆 Professional</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Time Slot</label>
                <select 
                  name="preferredSlot" 
                  value={formData.preferredSlot} 
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 text-gray-800 bg-white"
                >
                  <option value="morning">🌅 Morning (10:00 AM - 1:00 PM)</option>
                  <option value="afternoon">☀️ Afternoon (2:00 PM - 5:00 PM)</option>
                  <option value="evening">🌙 Evening (6:00 PM - 9:00 PM)</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Payment */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                <Wallet className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">Payment Details</h3>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-200">
              <div className="space-y-2">
                <div className="flex justify-between"><span className="text-gray-700">Base Registration Fee:</span><span className="font-bold text-gray-800">₹{baseFee}</span></div>
                {formData.teamMembers > 1 && <div className="flex justify-between"><span className="text-gray-700">Extra Members:</span><span className="font-bold text-gray-800">+₹{teamMemberBonus}</span></div>}
                {promoDiscount > 0 && <div className="flex justify-between text-green-600"><span>🎁 Promo Discount:</span><span>-₹{promoDiscount}</span></div>}
                <div className="border-t pt-2 mt-2 border-purple-200">
                  <div className="flex justify-between font-bold text-lg">
                    <span className="text-gray-800">Total Amount:</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">₹{totalFee}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <input 
                type="text" 
                name="promoCode" 
                value={formData.promoCode} 
                onChange={handleChange}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 text-gray-800 placeholder:text-gray-400"
                placeholder="Enter promo code" 
              />
              <Button type="button" variant="outline" onClick={applyPromoCode} className="border-purple-500 text-purple-600 hover:bg-purple-50">
                Apply
              </Button>
            </div>
            <p className="text-xs text-gray-500 -mt-2">Try: WELCOME50, EARLY100, TEAM200</p>
            
            <div className="grid grid-cols-2 gap-3">
              <label className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition ${formData.paymentMethod === 'online' ? 'border-purple-500 bg-purple-50' : 'border-gray-300 hover:bg-gray-50'}`}>
                <input type="radio" name="paymentMethod" value="online" checked={formData.paymentMethod === 'online'} onChange={handleChange} className="text-purple-600" />
                <CreditCard className="w-4 h-4 text-gray-600" /><span className="text-gray-700">Online Payment</span>
              </label>
              <label className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition ${formData.paymentMethod === 'offline' ? 'border-purple-500 bg-purple-50' : 'border-gray-300 hover:bg-gray-50'}`}>
                <input type="radio" name="paymentMethod" value="offline" checked={formData.paymentMethod === 'offline'} onChange={handleChange} className="text-purple-600" />
                <Building2 className="w-4 h-4 text-gray-600" /><span className="text-gray-700">Bank Transfer</span>
              </label>
            </div>
            
            {formData.paymentMethod === 'offline' && (
              <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                <p className="font-semibold text-blue-900 mb-2">🏦 Bank Transfer Details:</p>
                <div className="text-sm space-y-1 text-blue-800">
                  <p><span className="font-medium">Account Name:</span> MKK Ludo Tournament</p>
                  <p><span className="font-medium">Account Number:</span> 1234567890</p>
                  <p><span className="font-medium">IFSC Code:</span> ABCD0123456</p>
                  <p><span className="font-medium">Bank:</span> State Bank of India</p>
                </div>
              </div>
            )}
            
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} className="mt-1 text-purple-600" />
              <span className="text-sm text-gray-700">I agree to the <a href="#" className="text-purple-600 hover:underline font-medium">Terms & Conditions</a> and <a href="#" className="text-purple-600 hover:underline font-medium">Privacy Policy</a> <span className="text-red-500">*</span></span>
            </label>
            {errors.termsAccepted && <p className="text-sm text-red-500">{errors.termsAccepted}</p>}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-gray-200">
          {currentStep > 1 && (
            <Button type="button" variant="outline" onClick={prevStep} className="px-6 border-gray-300 hover:border-gray-400 text-gray-700">
              ← Back
            </Button>
          )}
          {currentStep < 4 ? (
            <Button type="button" variant="primary" onClick={nextStep} className="ml-auto px-8 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white">
              Next Step <ArrowRight className="w-4 h-4 ml-2 inline" />
            </Button>
          ) : (
            <Button type="submit" variant="primary" disabled={isSubmitting} className="ml-auto px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
              {isSubmitting ? <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" /> Processing...</> : `Pay ₹${totalFee} →`}
            </Button>
          )}
        </div>

        <p className="text-xs text-gray-400 text-center mt-6 flex items-center justify-center gap-1">
          <Lock className="w-3 h-3" /> Your information is secure and encrypted | 100% Safe & Secure
        </p>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out; }
      `}</style>
    </form>
  );
}