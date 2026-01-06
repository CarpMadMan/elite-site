"use client";

import { FadeIn } from "@/components/animations";
import * as LucideIcons from "lucide-react";

// Helper function to get the correct icon component
function getToolIcon(iconName: string): React.ReactNode {
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<any>>)[iconName];
  return IconComponent ? <IconComponent className="w-8 h-8" /> : null;
}

export function IntegrationsSection() {
  // Using Lucide React icons for professional app logos
  const tools = [
    // Version Control
    { name: "GitHub", icon: "github", category: "vc" },
    { name: "GitLab", icon: "gitlab", category: "vc" },
    { name: "Bitbucket", icon: "bitbucket", category: "vc" },
    
    // IDEs & Editors
    { name: "VS Code", icon: "code", category: "ide" },
    { name: "JetBrains", icon: "box", category: "ide" },
    { name: "IntelliJ", icon: "terminal", category: "ide" },
    { name: "PyCharm", icon: "file-code", category: "ide" },
    { name: "WebStorm", icon: "globe", category: "ide" },
    
    // Design & Collaboration
    { name: "Figma", icon: "figma", category: "design" },
    { name: "Linear", icon: "layout-template", category: "design" },
    { name: "Notion", icon: "file-text", category: "design" },
    
    // Communication
    { name: "Slack", icon: "slack", category: "comm" },
    { name: "Discord", icon: "message-square", category: "comm" },
    
    // Project Management
    { name: "Jira", icon: "check-square", category: "pm" },
    { name: "Asana", icon: "layers", category: "pm" },
    { name: "Trello", icon: "trello", category: "pm" },
    { name: "Confluence", icon: "book-open", category: "pm" },
    
    // Documentation
    { name: "Google Docs", icon: "file", category: "docs" },
    { name: "Office 365", icon: "file-spreadsheet", category: "docs" },
    
    // Cloud Platforms
    { name: "AWS", icon: "cloud", category: "cloud" },
    { name: "Azure", icon: "cloud-rain", category: "cloud" },
    { name: "GCP", icon: "cloud-lightning", category: "cloud" },
    
    // Deployment & Hosting
    { name: "Vercel", icon: "triangle", category: "deploy" },
    { name: "Netlify", icon: "upload-cloud", category: "deploy" },
    { name: "Heroku", icon: "server", category: "deploy" },
    
    // DevOps & Containers
    { name: "Docker", icon: "package", category: "devops" },
    { name: "Kubernetes", icon: "container", category: "devops" },
    
    // API & Testing Tools
    { name: "Postman", icon: "send", category: "api" },
    { name: "Insomnia", icon: "moon", category: "api" },
    { name: "DBeaver", icon: "database", category: "api" },
    { name: "DataGrip", icon: "database-zap", category: "api" },
    
    // Additional Dev Tools
    { name: "Cursor", icon: "sparkles", category: "ide" },
    { name: "Replit", icon: "zap", category: "ide" },
    { name: "CodePen", icon: "pen-tool", category: "ide" },
    { name: "Stack Overflow", icon: "help-circle", category: "docs" },
  ];

  return (
    <section className="py-24">
      <div className="container">
        <FadeIn delay={0} direction="up" className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight">
            Connect your tools and start tracking automatically
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Track skills across all your development tools
          </p>
        </FadeIn>

        <div className="grid grid-cols-4 gap-6 md:grid-cols-6 lg:grid-cols-10">
          {tools.map((tool, index) => (
            <FadeIn key={index} delay={index * 0.03} direction="up">
              <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-card border hover:border-primary/50 transition-colors">
                <span className="text-3xl mb-2">{getToolIcon(tool.icon)}</span>
                <span className="text-xs text-muted-foreground text-center">{tool.name}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
