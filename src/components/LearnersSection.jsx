import React from 'react'

const POSTS = [
  {
    name: 'Shivam Jha', title: 'Production Engineer · Data Analytics',
    avatar: 'SJ', color: '#3b82f6', time: '2w',
    tags: ['#AcceleratorX', '#DataAnalytics', '#LearningJourney', '#Upskilling'],
    likes: 48,
    text: "Over the past few weeks at AcceleratorX, I had the opportunity to dive deep into how AI is transforming product management — from idea validation to user experience and growth strategy.\n\nThis program wasn't just about learning AI — it was about understanding how to think like a product leader in the AI era.",
  },
  {
    name: 'Sourabh Kalra', title: 'Build Engineer I | Entrepreneur',
    avatar: 'SK', color: '#8b5cf6', time: '2w',
    tags: ['#AcceleratorX', '#DataAnalytics', '#LearningJourney', '#DataDriven'],
    likes: 31,
    text: "Embarking on my journey with AcceleratorX as part of the Data Analytics Cohort has been an incredibly enriching experience so far.\n\nEach session brings a perfect blend of conceptual clarity and real-world application — from exploring data visualization to understanding how analytics drives decision-making.",
  },
  {
    name: 'Kamyaas', title: 'AI Builder | AcceleratorX Cohort',
    avatar: 'KR', color: '#10b981', time: '3w',
    tags: ['#AIAutomation', '#GenAI', '#AgentsAI', '#AcceleratorX'],
    likes: 17,
    text: "This combination made it possible to create a simple, accessible, and trustworthy app to plan our dietary health goals.\n\nBuilding this with the AcceleratorX community gave me both the technical depth and the product thinking to ship something real.",
  },
  {
    name: 'Sourabh Kalra', title: 'Build Engineer I | Entrepreneur · 2yr',
    avatar: 'SK', color: '#8b5cf6', time: '2yr',
    tags: ['#ContextForge', '#PromptEngineering', '#AITools', '#BuilderMindset'],
    likes: 62,
    text: "Struggling with prompts that almost work but never hit the mark? You're not alone — and that's why I built ContextForge.\n\nAs part of the ABC — Automation Building Challenge by AcceleratorX, I built a powerful web app that helps refine prompts into high-performing ones in seconds.",
  },
  {
    name: 'Priya Sharma', title: 'AI Product Manager · Razorpay',
    avatar: 'PS', color: '#60a5fa', time: '1w',
    tags: ['#AIProduct', '#ProductManagement', '#AcceleratorX'],
    likes: 74,
    text: "The AcceleratorX AI PM track completely changed how I approach product decisions. Learning to work with AI agents, build intuition around data, and design for intelligent systems was a game-changer.\n\nIf you're in product and not thinking AI-first, you're already behind.",
  },
  {
    name: 'Harshitha SR', title: 'Software Engineering Trainee · Excelsoft',
    avatar: 'HS', color: '#34d399', time: '2w',
    tags: ['#SoftwareEngineering', '#AILearning', '#WomenInTech', '#AcceleratorX'],
    likes: 39,
    text: "I started my career as a Software Engineer. After a long break, I came back not to catch up — but to create what the future will run on.\n\nAcceleratorX gave me the structure, mentorship, and community to do exactly that.",
  },
  {
    name: 'Arjun Mehta', title: 'Senior ML Engineer · Google',
    avatar: 'AM', color: '#7c3aed', time: '3w',
    tags: ['#MachineLearning', '#GenAI', '#AcceleratorX'],
    likes: 91,
    text: "Even as an ML engineer with years of experience, AcceleratorX's Generative AI track taught me frameworks I hadn't encountered anywhere else.\n\nThe practical emphasis on building real products — not just models — is what sets it apart. Highly recommend.",
  },
  {
    name: 'Arun Karthik', title: 'Digital Marketing Intern · VMax Wellness',
    avatar: 'AK', color: '#c084fc', time: '1w',
    tags: ['#DigitalMarketing', '#AIMarketing', '#AcceleratorX'],
    likes: 28,
    text: "I joined AcceleratorX to understand how AI is reshaping digital marketing. Within weeks, I was building automated content pipelines and analyzing campaign data in ways I never imagined.\n\nThe mentors are practitioners — not just teachers.",
  },
  {
    name: 'Dhruv Dave', title: 'Prompt Engineer · Alight Technologies',
    avatar: 'DD', color: '#38bdf8', time: '4w',
    tags: ['#PromptEngineering', '#AIWorkflows', '#AcceleratorX'],
    likes: 55,
    text: "Understood how AI systems actually work — from agents and workflows to production-ready builds.\n\nBefore AcceleratorX, I was stitching together AI tools with no real framework. Now I understand the architecture behind agent systems and can build reliable, scalable AI workflows.",
  },
  {
    name: 'Bhagyashree K.', title: 'Data Analyst · Power BI',
    avatar: 'BK', color: '#fb7185', time: '2w',
    tags: ['#DataAnalytics', '#PowerBI', '#AcceleratorX'],
    likes: 43,
    text: "Built an interactive Power BI dashboard to analyze Netflix movies and series as my capstone project.\n\nThe AcceleratorX data science cohort pushed me to go beyond textbooks — real datasets, real problems, real feedback.",
  },
  {
    name: 'Biswajit Pradhan', title: 'Frontend Developer · Infosys',
    avatar: 'BP', color: '#818cf8', time: '3w',
    tags: ['#Frontend', '#AIIntegration', '#AcceleratorX'],
    likes: 36,
    text: "Built Classmate.io — a comprehensive product for early age students, professionals and aspirants — as part of BuildrX.\n\nIntegrating AI into the learning experience was challenging but incredibly rewarding. AcceleratorX gave me the vision and tools to ship it.",
  },
  {
    name: 'Raghul Balaji', title: 'Content Developer · Ments',
    avatar: 'RB', color: '#f87171', time: '1w',
    tags: ['#ContentCreation', '#AI4Content', '#AcceleratorX'],
    likes: 22,
    text: "From idea to interface — delivered my first AI-powered content tool and applied it on real products in real time.\n\nThe AcceleratorX community helped me think beyond content creation toward content intelligence. A mindset shift I didn't know I needed.",
  },
]

const COLUMNS = [
  POSTS.slice(0, 3),
  POSTS.slice(3, 6),
  POSTS.slice(6, 9),
  POSTS.slice(9, 12),
]

function LinkedInPost({ post }) {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#f5eedc' : '#f0e9d6',
        borderRadius: 4,
        border: '1px solid #c8b89a',
        borderTop: '3px solid #8b6f3e',
        padding: '18px 18px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        marginBottom: 18,
        boxShadow: hovered
          ? '0 4px 20px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.4)'
          : '0 2px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)',
        transition: 'all 0.25s ease',
        position: 'relative',
        fontFamily: 'Georgia, "Times New Roman", serif',
      }}
    >
      {/* Corner fold effect */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: 0, height: 0,
        borderStyle: 'solid',
        borderWidth: '0 16px 16px 0',
        borderColor: `transparent #c8b89a transparent transparent`,
        opacity: 0.5,
      }} />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
        <div style={{
          width: 40, height: 40, borderRadius: '50%',
          background: `linear-gradient(135deg,${post.color},${post.color}99)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 13, fontWeight: 800, color: '#fff', flexShrink: 0,
          border: '2px solid #a08050',
          fontFamily: 'system-ui, sans-serif',
        }}>
          {post.avatar}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ color: '#2d1a08', fontWeight: 700, fontSize: 14, fontFamily: 'Georgia, serif' }}>{post.name}</div>
          <div style={{ color: '#6b4c2a', fontSize: 11, fontStyle: 'italic', marginTop: 1 }}>{post.title}</div>
          <div style={{ color: '#9a7a55', fontSize: 10, marginTop: 2, fontFamily: 'system-ui, sans-serif' }}>{post.time} ago</div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid #c0a070', opacity: 0.5 }} />

      {/* Body */}
      <div style={{ color: '#2d1a08', fontSize: 12.5, lineHeight: 1.75, fontFamily: 'Georgia, serif' }}>
        {post.text.split('\n').map((line, i) => (
          <span key={i}>{line}{i < post.text.split('\n').length - 1 && <><br /><br /></>}</span>
        ))}
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
        {post.tags.map(tag => (
          <span key={tag} style={{ color: '#5c3d1e', fontSize: 10, fontWeight: 600, fontFamily: 'system-ui, sans-serif', letterSpacing: '0.02em' }}>{tag}</span>
        ))}
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, paddingTop: 10, borderTop: '1px dashed #c0a070', color: '#7a5a35', fontSize: 11, fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
        <span style={{ fontStyle: 'normal' }}>👍</span>
        <span>{post.likes} found this helpful</span>
      </div>
    </div>
  )
}

function ScrollColumn({ posts, reverse = false }) {
  const doubled = [...posts, ...posts]
  return (
    <div style={{
      overflow: 'hidden',
      height: 620,
      maskImage: 'linear-gradient(180deg, transparent 0%, black 12%, black 88%, transparent 100%)',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        animation: `${reverse ? 'scrollDown' : 'scrollUp'} ${posts.length * 10}s linear infinite`,
        willChange: 'transform',
      }}>
        {doubled.map((post, i) => (
          <LinkedInPost key={i} post={post} />
        ))}
      </div>
    </div>
  )
}

export default function LearnersSection() {
  return (
    <section style={{ background: '#050508', padding: '88px 0' }}>
      <style>{`
        @keyframes scrollUp {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          from { transform: translateY(-50%); }
          to { transform: translateY(0); }
        }
        .learners-col:hover > div > div {
          animation-play-state: paused;
        }
      `}</style>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <h2 style={{ color: '#fff', fontSize: 'clamp(26px,3.5vw,44px)', fontWeight: 900, letterSpacing: '-0.03em' }}>
            Hear from the learners
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24,
        }}>
          {COLUMNS.map((col, i) => (
            <div key={i} className="learners-col">
              <ScrollColumn posts={col} reverse={i % 2 === 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
