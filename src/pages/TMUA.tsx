import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, Clock, Target, CheckCircle, BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const TMUA = () => {
  const syllabus = [
    "Algebra and Functions",
    "Coordinate Geometry", 
    "Sequences and Series",
    "Trigonometry",
    "Exponentials and Logarithms",
    "Differentiation",
    "Integration",
    "Probability and Statistics"
  ];

  const examStructure = [
    { section: "Paper 1", duration: "75 minutes", questions: "20 multiple choice", focus: "Mathematical thinking" },
    { section: "Paper 2", duration: "75 minutes", questions: "20 multiple choice", focus: "Mathematical reasoning" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
            <Calculator className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            TMUA Preparation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master the Test of Mathematics for University Admission with expert guidance from 
            Cambridge students who have successfully passed the exam.
          </p>
        </div>

        {/* What is TMUA */}
        <Card className="mb-12 shadow-elegant">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              What is the TMUA?
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-muted-foreground">
              The Test of Mathematics for University Admission (TMUA) is a pre-interview admissions test 
              for undergraduate Mathematics and Mathematics-related courses at several universities, 
              including the University of Cambridge for Economics.
            </p>
          </CardContent>
        </Card>

        {/* Exam Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Exam Structure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {examStructure.map((paper, index) => (
                  <div key={index} className="border rounded-lg p-4 bg-muted/30">
                    <h4 className="font-semibold text-primary mb-2">{paper.section}</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Duration: {paper.duration}</p>
                      <p>Format: {paper.questions}</p>
                      <p>Focus: {paper.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Syllabus Coverage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-2">
                {syllabus.map((topic, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{topic}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>


        {/* Call to Action */}
        <div className="text-center">
          <Card className="inline-block bg-gradient-hero text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Excel in Your TMUA?</h3>
              <p className="mb-6 text-white/90">
                Join our proven TMUA preparation program and boost your chances of admission to Cambridge Economics and other top courses.
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

export default TMUA;