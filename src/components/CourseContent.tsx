
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";
import { coursesData } from "@/data/coursesData";

export const CourseContent = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Course <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Curriculum</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive course content designed to make you industry-ready
          </p>
        </div>

        <Tabs defaultValue={coursesData[0]?.id} className="max-w-6xl mx-auto">
          <TabsList className="grid grid-cols-3 lg:grid-cols-5 gap-2 h-auto p-2 bg-white border">
            {coursesData.map((course) => (
              <TabsTrigger 
                key={course.id} 
                value={course.id} 
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                {course.title.length > 10 ? course.title.split(' ')[0] : course.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {coursesData.map((course) => (
            <TabsContent key={course.id} value={course.id} className="mt-8">
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                  <CardDescription className="text-blue-100">
                    Complete curriculum breakdown
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {course.modules.map((module, index) => (
                      <div key={index} className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                          Module {index + 1}: {module.name}
                        </h4>
                        <ul className="space-y-2">
                          {module.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-center space-x-3">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
