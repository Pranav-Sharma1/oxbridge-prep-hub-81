import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GraduationCap, MapPin, Clock } from 'lucide-react';
import { useEffect } from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: "Vincent Xue",
      role: "Tutor",
      university: "University of Cambridge",
      course: "Mathematics",
      year: "1st Year",
      specialties: ["TMUA", "MAT"],
      price: "£30/hour"
    },
    {
      name: "Sophie Chen",
      role: "Tutor", 
      university: "University of Cambridge",
      course: "Economics",
      year: "1st Year",
      specialties: ["TMUA", "Essay Writing", "Interview Prep"],
      price: "£30/hour"
    },
    {
      name: "Pranav Sharma",
      role: "Tutor",
      university: "Imperial College London",
      course: "Aeronautical Engineering",
      year: "1st Year",
      specialties: ["ESAT", "Interview Prep"],
      price: "£30/hour"
    }
  ];

  const examSections = [
    { 
      id: "tmua", 
      title: "TMUA Tutors", 
      description: "Expert tutors specializing in the Test of Mathematics for University Admission"
    },
    { 
      id: "mat", 
      title: "MAT Tutors", 
      description: "Specialized tutors for the Mathematics Admissions Test"
    },
    { 
      id: "esat", 
      title: "ESAT Tutors", 
      description: "Expert tutors for the Engineering and Science Admissions Test"
    },
    { 
      id: "interview-prep", 
      title: "Interview Preparation", 
      description: "Tutors specializing in university interview preparation"
    }
  ];

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const getTutorsForExam = (examType: string) => {
    return teamMembers.filter(member => 
      member.specialties.some(specialty => 
        specialty.toLowerCase().includes(examType.toLowerCase()) ||
        (examType === "interview-prep" && specialty.toLowerCase().includes("interview"))
      )
    );
  };

  const renderTutorCard = (member: any) => (
    <Card key={`${member.name}-card`} className="hover:shadow-elegant transition-all duration-300">
      <CardHeader className="text-center pb-4">
        <div className="w-24 h-24 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
          <GraduationCap className="h-12 w-12 text-white" />
        </div>
        <CardTitle className="text-2xl mb-2">{member.name}</CardTitle>
        <CardDescription className="text-lg font-medium text-primary">
          {member.role}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{member.university}</span>
        </div>
        
        <div>
          <p className="font-medium text-foreground">{member.course}</p>
          <p className="text-sm text-muted-foreground">{member.year}</p>
        </div>

        <div>
          <p className="font-medium mb-2 text-foreground">Specialties:</p>
          <div className="flex flex-wrap gap-2">
            {member.specialties.map((specialty: string) => (
              <Badge key={specialty} variant="secondary">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 text-primary">
          <Clock className="h-4 w-4" />
          <span className="font-semibold">{member.price}</span>
        </div>

        <Button className="w-full mt-4">
          Book Now
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Meet Our Expert Tutors
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our tutors are current students at Cambridge and Imperial who have successfully navigated 
            the admissions process and are passionate about helping you achieve your goals.
          </p>
        </div>

        {examSections.map((section) => {
          const tutors = getTutorsForExam(section.id);
          
          if (tutors.length === 0) return null;
          
          return (
            <div key={section.id} id={section.id} className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {section.title}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {section.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tutors.map((member) => renderTutorCard(member))}
              </div>
            </div>
          );
        })}

        <div className="mt-16 text-center">
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Why Choose Our Tutors?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Recent Experience</h4>
                  <p className="text-muted-foreground text-sm">
                    Our tutors recently went through the same admissions process you're facing, 
                    giving them fresh insights into what examiners are looking for.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Proven Success</h4>
                  <p className="text-muted-foreground text-sm">
                    All our tutors achieved top grades and gained admission to their first-choice universities, 
                    demonstrating their mastery of the material.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Personalized Approach</h4>
                  <p className="text-muted-foreground text-sm">
                    We understand that every student is different and tailor our teaching methods 
                    to match your learning style and goals.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Team;