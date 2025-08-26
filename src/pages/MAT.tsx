import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, Clock, Target, CheckCircle, BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const MAT = () => {
  const syllabus = [
    "Algebra (Linear, Quadratic, Polynomial)",
    "Functions and Graphs",
    "Coordinate Geometry",
    "Trigonometry",
    "Exponentials and Logarithms",
    "Differentiation and Applications",
    "Integration Techniques",
    "Sequences and Series"
  ];

  const examStructure = [
    { 
      section: "Section 1", 
      duration: "2.5 hours total", 
      questions: "Multiple choice questions", 
      focus: "All candidates complete this section" 
    },
    { 
      section: "Section 2-7", 
      duration: "Choose based on course", 
      questions: "Longer problems", 
      focus: "Course-specific advanced topics" 
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-50 rounded-full mb-6">
            <Calculator className="h-8 w-8 text-purple-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            MAT Preparation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Excel in the Mathematics Admissions Test for Oxford Mathematics, Computer Science, 
            and related courses with our expert tutoring from Cambridge Mathematics students.
          </p>
        </div>

        {/* What is MAT */}
        <Card className="mb-12 shadow-elegant">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              What is the MAT?
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-muted-foreground mb-4">
              The Mathematics Admissions Test (MAT) is a subject-specific admissions test for 
              undergraduate Mathematics and Computer Science courses at the University of Oxford, 
              and Mathematics courses at Imperial College London and the University of Warwick.
            </p>
            <p className="text-muted-foreground">
              The test is designed to test the depth of mathematical understanding and the ability 
              to apply basic mathematical knowledge to solve more complex problems.
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
                {examStructure.map((section, index) => (
                  <div key={index} className="border rounded-lg p-4 bg-muted/30">
                    <h4 className="font-semibold text-primary mb-2">{section.section}</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Duration: {section.duration}</p>
                      <p>Format: {section.questions}</p>
                      <p>Details: {section.focus}</p>
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
                Key Topics
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

        {/* Course-Specific Sections */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-xl">Course-Specific Sections</CardTitle>
            <CardDescription>
              After Section 1, you'll complete additional sections based on your chosen course
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Mathematics</h4>
                <p className="text-sm text-muted-foreground">Sections 1, 2, 3</p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Mathematics & Statistics</h4>
                <p className="text-sm text-muted-foreground">Sections 1, 2, 6</p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Mathematics & Computer Science</h4>
                <p className="text-sm text-muted-foreground">Sections 1, 2, 7</p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Computer Science</h4>
                <p className="text-sm text-muted-foreground">Sections 1, 5, 7</p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Mathematics & Philosophy</h4>
                <p className="text-sm text-muted-foreground">Sections 1, 2, 4</p>
              </div>
            </div>
          </CardContent>
        </Card>


        {/* Call to Action */}
        <div className="text-center">
          <Card className="inline-block bg-gradient-hero text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Conquer the MAT?</h3>
              <p className="mb-6 text-white/90">
                Join students who have successfully gained admission to Oxford Mathematics with our proven MAT preparation program.
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

export default MAT;