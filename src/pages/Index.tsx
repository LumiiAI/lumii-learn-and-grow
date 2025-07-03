import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { Heart, Brain, Users, TrendingUp, Star, Shield, Clock, Award, CheckCircle, Play, ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/ai-robot-avatar.jpg";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gradeLevel: "",
    concerns: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Welcome to MyFriendLumii AI!",
      description: "We'll be in touch soon with your early access details.",
    });
    setFormData({ name: "", email: "", gradeLevel: "", concerns: "", phone: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-glow/10 via-background to-secondary-light/10">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="mb-4">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI-Powered Learning Revolution
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Give Your Child a{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Personal AI Learning Companion
                  </span>{" "}
                  That Grows With Them
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  MyFriendLumii AI identifies learning gaps, adapts to your child's style, and supports their wellbeing - reducing stress while boosting academic confidence.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" className="group">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="xl" className="group">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo Video
                </Button>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-secondary" />
                  Safe & secure
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img 
                src={heroImage} 
                alt="AI Robot Avatar - Your Child's Learning Companion" 
                className="relative z-10 w-full rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Every Parent Faces These Learning Challenges
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Traditional one-size-fits-all education leaves many children struggling in silence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <TrendingUp className="w-8 h-8 text-destructive" />,
                title: "Academic Stress",
                description: "Children feeling overwhelmed by rigid learning approaches"
              },
              {
                icon: <Brain className="w-8 h-8 text-destructive" />,
                title: "Hidden Learning Gaps",
                description: "Difficulty identifying exactly where your child needs support"
              },
              {
                icon: <Users className="w-8 h-8 text-destructive" />,
                title: "Lack of Personalization",
                description: "One-size-fits-all methods don't match your child's unique style"
              },
              {
                icon: <Heart className="w-8 h-8 text-destructive" />,
                title: "Wellbeing Disconnect",
                description: "Academic pressure often ignores emotional and mental health"
              }
            ].map((problem, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
                    {problem.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              The MyFriendLumii Solution
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              AI That Understands Your Child's Unique Learning Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our advanced AI adapts to your child's learning style, identifies gaps, and supports their emotional wellbeing - all while making learning fun and stress-free.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-12 h-12 text-primary" />,
                title: "Smart Gap Analysis",
                description: "Instantly identifies where your child needs support and creates targeted learning paths",
                benefit: "No more guessing what your child struggles with"
              },
              {
                icon: <Heart className="w-12 h-12 text-secondary" />,
                title: "Wellbeing Integration",
                description: "Supports emotional health alongside academic growth with mood tracking and mindfulness",
                benefit: "Happier, more confident learners"
              },
              {
                icon: <Users className="w-12 h-12 text-accent" />,
                title: "Personalized AI Tutor",
                description: "Adapts to your child's unique learning style, pace, and personality preferences",
                benefit: "Learning that truly fits your child"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    <div className="pt-2">
                      <Badge variant="outline" className="bg-highlight-light text-highlight">
                        {feature.benefit}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-secondary-light/20 to-primary-glow/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              How MyFriendLumii Works in 3 Simple Steps
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Getting started is easy - we'll have your child learning better in minutes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Smart Assessment",
                description: "Your child takes a fun, interactive assessment that identifies their learning strengths, challenges, and preferred style",
                icon: <Brain className="w-8 h-8" />
              },
              {
                step: "02", 
                title: "AI Personalization",
                description: "Our AI creates a customized learning path and helps your child choose their perfect AI companion avatar",
                icon: <Sparkles className="w-8 h-8" />
              },
              {
                step: "03",
                title: "Continuous Growth",
                description: "The AI adapts and grows with your child, providing real-time support and tracking progress for both child and parent",
                icon: <TrendingUp className="w-8 h-8" />
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-8 h-full hover:shadow-lg transition-shadow">
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl font-bold text-primary">{step.step}</div>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Everything Your Child Needs to Thrive
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive features designed to support academic success and emotional wellbeing
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-6 h-6" />,
                title: "AI Tutor Across All Subjects",
                description: "Personalized 1-on-1 tutoring for Math, English, Science, and Geography"
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Wellbeing Companion",
                description: "Mood tracking, breathing exercises, and mindfulness activities"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Parent Dashboard", 
                description: "Weekly progress reports, learning suggestions, and wellbeing insights"
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "Gamified Learning",
                description: "Fun avatar system, progress badges, and achievement rewards"
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Adaptive Technology",
                description: "AI learns from your child's behavior and continuously improves"
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Safe & Secure",
                description: "COPPA compliant with robust privacy protection for children"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow group">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for Different Users */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Benefits That Matter to Your Family
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "For Parents",
                icon: <Users className="w-8 h-8 text-accent" />,
                benefits: [
                  "Peace of mind with clear progress tracking",
                  "Weekly insights into learning and wellbeing",
                  "Know exactly where your child needs support",
                  "Reduce homework stress and family tension"
                ]
              },
              {
                title: "For Students", 
                icon: <Heart className="w-8 h-8 text-secondary" />,
                benefits: [
                  "Fun, stress-free learning experience",
                  "Personal AI friend that understands them",
                  "Build confidence through personalized support",
                  "Learn at their own pace without pressure"
                ]
              },
              {
                title: "For Educators",
                icon: <Award className="w-8 h-8 text-primary" />,
                benefits: [
                  "Detailed progress data for each student",
                  "Supplementary support that reinforces classroom learning",
                  "Identify students who need extra attention",
                  "Free up time for more meaningful teaching"
                ]
              }
            ].map((group, index) => (
              <Card key={index} className="p-8">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {group.icon}
                  </div>
                  <CardTitle className="text-2xl">{group.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {group.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Trusted by Families Everywhere
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of families already transforming their children's learning journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "MyFriendLumii has completely transformed how my daughter approaches math. She actually looks forward to learning now!",
                author: "Sarah M.",
                role: "Parent of 3rd grader",
                rating: 5
              },
              {
                quote: "The wellbeing features have been a game-changer. My son's anxiety around homework has virtually disappeared.",
                author: "Michael R.",
                role: "Parent of 5th grader", 
                rating: 5
              },
              {
                quote: "As an educator, I love how the platform provides detailed insights that help me support my students better.",
                author: "Jennifer L.",
                role: "Elementary Teacher",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-muted-foreground">Active Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">98%</div>
                <div className="text-muted-foreground">Parent Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">25%</div>
                <div className="text-muted-foreground">Grade Improvement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-4">
                  Start Your Child's Learning Journey Today
                </CardTitle>
                <CardDescription className="text-lg">
                  Join our early access program and be among the first families to experience the future of personalized learning.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Parent Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="grade">Child's Grade Level *</Label>
                      <Select value={formData.gradeLevel} onValueChange={(value) => setFormData({ ...formData, gradeLevel: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select grade level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="k">Kindergarten</SelectItem>
                          <SelectItem value="1">1st Grade</SelectItem>
                          <SelectItem value="2">2nd Grade</SelectItem>
                          <SelectItem value="3">3rd Grade</SelectItem>
                          <SelectItem value="4">4th Grade</SelectItem>
                          <SelectItem value="5">5th Grade</SelectItem>
                          <SelectItem value="6">6th Grade</SelectItem>
                          <SelectItem value="7">7th Grade</SelectItem>
                          <SelectItem value="8">8th Grade</SelectItem>
                          <SelectItem value="9">9th Grade</SelectItem>
                          <SelectItem value="10">10th Grade</SelectItem>
                          <SelectItem value="11">11th Grade</SelectItem>
                          <SelectItem value="12">12th Grade</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="concerns">Primary Learning Concerns (Optional)</Label>
                    <Textarea
                      id="concerns"
                      value={formData.concerns}
                      onChange={(e) => setFormData({ ...formData, concerns: e.target.value })}
                      placeholder="Tell us about any specific learning challenges or goals..."
                      rows={3}
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" size="xl" className="w-full">
                    Get Early Access
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  
                  <div className="text-center text-sm text-muted-foreground">
                    <Shield className="w-4 h-4 inline mr-2" />
                    We respect your privacy. No spam, ever.
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about MyFriendLumii AI
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "What age range is MyFriendLumii suitable for?",
                  answer: "MyFriendLumii AI is designed for K-12 students (ages 5-18). Our AI adapts its communication style, complexity, and features to match your child's developmental stage and grade level."
                },
                {
                  question: "Which subjects does the platform cover?",
                  answer: "We currently offer comprehensive support for Math, English/Language Arts, Science, and Geography. Our curriculum aligns with national and state standards, covering all major topics within these subjects."
                },
                {
                  question: "How do you ensure my child's data privacy and safety?",
                  answer: "We are COPPA compliant and take children's privacy extremely seriously. All data is encrypted, we never share personal information with third parties, and parents have full control over their child's data at all times."
                },
                {
                  question: "What technical requirements are needed?",
                  answer: "MyFriendLumii works on any device with internet access - tablets, computers, or smartphones. No special software installation is required as it runs in your web browser."
                },
                {
                  question: "How involved do parents need to be?",
                  answer: "Parents can be as involved as they want! The platform works independently with students, but provides comprehensive dashboards and weekly reports so parents can stay informed and engaged in their child's progress."
                },
                {
                  question: "Is there a free trial available?",
                  answer: "Yes! We offer a 14-day free trial so your family can experience MyFriendLumii risk-free. No credit card required to start."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Ready to Transform Your Child's Learning Experience?
            </h2>
            <p className="text-xl opacity-90">
              Join thousands of families who've already discovered the joy of stress-free, personalized learning with MyFriendLumii AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="xl" className="bg-white text-primary hover:bg-white/90">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="ghost" size="xl" className="text-white border-white/30 hover:bg-white/10">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 text-sm opacity-75">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                14-day free trial
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                COPPA compliant
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Setup in minutes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">MyFriendLumii AI</h3>
            <p className="text-muted">Your child's personal AI learning companion that grows with them</p>
            <div className="flex justify-center gap-6 text-sm">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
            </div>
            <div className="pt-8 border-t border-muted/20">
              <p className="text-sm text-muted">© 2024 MyFriendLumii AI. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;