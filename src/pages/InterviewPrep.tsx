import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Users, Target, CheckCircle, BookOpen, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const InterviewPrep = () => {
  const interviewTypes = [
    "Oxford Subject Interviews",
    "Cambridge Supervisions Style",
    "Imperial College Interviews", 
    "Technical Problem Solving",
    "Academic Discussions",
    "Motivation & Fit Assessment"
  ];

  const preparationAreas = [
    { 
      area: "Subject Knowledge", 
      description: "Deep understanding of your chosen field beyond A-level requirements",
      icon: BookOpen
    },
    { 
      area: "Problem-Solving", 
      description: "Thinking aloud through complex problems under pressure",
      icon: Target
    },
    { 
      area: "Communication Skills", 
      description: "Articulating ideas clearly and engaging in academic discussion",
      icon: MessageCircle
    },
    { 
      area: "Interview Technique", 
      description: "Managing nerves, building rapport, and presenting your best self",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mb-6">
            <MessageCircle className="h-8 w-8 text-red-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Interview Preparation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Excel in your Oxbridge and Imperial College interviews with comprehensive preparation 
            from students who have successfully navigated the interview process.
          </p>
        </div>

        {/* Why Interview Prep Matters */}
        <Card className="mb-12 shadow-elegant">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <MessageCircle className="h-6 w-6 text-primary" />
              Why Interview Preparation is Essential
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-muted-foreground mb-4">
              Oxbridge interviews are unlike any other university interview. They're academic conversations 
              designed to assess your intellectual curiosity, problem-solving ability, and potential to thrive 
              in the tutorial/supervision system.
            </p>
            <p className="text-muted-foreground">
              Our tutors have experienced these interviews firsthand and understand what admissions tutors 
              are looking for. We'll help you develop the confidence and skills to showcase your academic potential.
            </p>
          </CardContent>
        </Card>

        {/* Interview Types */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Types of Interviews We Prepare You For
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-2">
                {interviewTypes.map((type, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{type}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                What to Expect
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-primary/20 pl-4">
                  <h4 className="font-semibold text-foreground">Oxford Interviews</h4>
                  <p className="text-sm text-muted-foreground">Usually 2-3 interviews, 20-45 minutes each, focused on your subject and problem-solving.</p>
                </div>
                <div className="border-l-4 border-primary/20 pl-4">
                  <h4 className="font-semibold text-foreground">Cambridge Interviews</h4>
                  <p className="text-sm text-muted-foreground">Often 2 interviews per college, academic focused with some personal questions.</p>
                </div>
                <div className="border-l-4 border-primary/20 pl-4">
                  <h4 className="font-semibold text-foreground">Imperial Interviews</h4>
                  <p className="text-sm text-muted-foreground">Technical interviews assessing problem-solving and motivation for engineering.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preparation Areas */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Key Preparation Areas</CardTitle>
            <CardDescription>
              Comprehensive interview preparation covering all essential skills
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {preparationAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <div key={index} className="flex gap-4 p-4 border rounded-lg">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{area.area}</h4>
                      <p className="text-sm text-muted-foreground">{area.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Mock Interview Process */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Our Mock Interview Process</CardTitle>
            <CardDescription>
              Realistic interview practice with detailed feedback
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2">Initial Assessment</h4>
                <p className="text-sm text-muted-foreground">
                  We assess your current interview skills and identify areas for improvement.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">Practice Sessions</h4>
                <p className="text-sm text-muted-foreground">
                  Multiple mock interviews simulating the real experience with authentic questions.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">Detailed Feedback</h4>
                <p className="text-sm text-muted-foreground">
                  Comprehensive feedback on your performance with actionable advice for improvement.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Our Approach */}
        <Card className="mb-12 bg-gradient-card border-0 shadow-elegant">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Target className="h-6 w-6 text-primary" />
              Why Choose Our Interview Preparation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Authentic Experience</h4>
                <p className="text-sm text-muted-foreground">
                  Our tutors have recent experience of Oxbridge interviews and understand current expectations.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Subject-Specific Focus</h4>
                <p className="text-sm text-muted-foreground">
                  Tailored preparation for Mathematics, Economics, and Engineering interviews.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Confidence Building</h4>
                <p className="text-sm text-muted-foreground">
                  We help you develop the confidence to engage naturally in academic discussions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="inline-block bg-gradient-hero text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Ace Your Interview?</h3>
              <p className="mb-6 text-white/90">
                Build the confidence and skills you need to excel in your Oxbridge or Imperial College interview.
              </p>
              <div className="flex justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/team">Meet the Tutors</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InterviewPrep;