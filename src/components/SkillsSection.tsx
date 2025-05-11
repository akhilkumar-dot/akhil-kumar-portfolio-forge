import React from "react";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

interface Skill {
  name: string;
  percentage: number;
}

interface SkillTag {
  name: string;
  color?: string;
}

const skills: Skill[] = [
  { name: "Python", percentage: 90 },
  { name: "Scikit-learn", percentage: 80 },
  { name: "TensorFlow", percentage: 75 },
  { name: "OpenCV", percentage: 70 },
  { name: "Pandas/NumPy", percentage: 85 },
  { name: "Git & Jupyter", percentage: 80 },
];

const otherSkills: SkillTag[] = [
  { name: "Machine Learning", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
  { name: "Deep Learning", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
  { name: "Data Visualization", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" },
  { name: "NLP", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300" },
  { name: "Computer Vision", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300" },
  { name: "HTML/CSS", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" },
  { name: "SQL", color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300" },
  { name: "Matplotlib", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" },
  { name: "Seaborn", color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300" },
  { name: "Data Analysis", color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300" },
  { name: "Flask", color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300" },
  { name: "Neural Networks", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
  { name: "Transfer Learning", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300" },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card p-3 rounded-md shadow-md border">
        <p className="font-medium">{`${payload[0].payload.name}: ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-muted/50 scroll-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-center">
          My <span className="gradient-bg text-transparent bg-clip-text">Skills</span>
        </h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and proficiency in different tools and technologies.
        </p>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Skills Chart */}
          <div className="w-full lg:w-3/5 bg-card rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-6 font-heading">Technical Proficiency</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={skills}
                  layout="vertical"
                  margin={{ top: 10, right: 30, left: 50, bottom: 10 }}
                  barSize={32}
                >
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" scale="band" tick={{ fontSize: 14 }} />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
                  <Bar dataKey="percentage" radius={[0, 4, 4, 0]}>
                    {skills.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={index % 2 === 0 ? "#7A9D54" : "#917FB3"} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Skills Tags */}
          <div className="w-full lg:w-2/5 bg-card rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-6 font-heading">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {otherSkills.map((skill, index) => (
                <Badge
                  key={index}
                  className={`${skill.color} text-sm py-2 px-3`}
                >
                  {skill.name}
                </Badge>
              ))}
            </div>

            {/* Languages Section */}
            <div className="mt-10">
              <h4 className="text-lg font-medium mb-4">Languages</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>English</span>
                    <span>Fluent</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-portfolio-purple h-2.5 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Telugu</span>
                    <span>Native</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-portfolio-teal h-2.5 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Hindi</span>
                    <span>Intermediate</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-portfolio-blue h-2.5 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
