import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Calendar,
  Clock,
  User,
  Tag,
  ArrowRight,
  Share2,
  ChevronRight,
  BookOpen,
  ArrowLeft
} from 'lucide-react';
import { BLOGS } from '../data/siteData';

export const BlogPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

  const selectedBlog = id ? BLOGS.find((b) => b.id === parseInt(id)) : null;

  // Single Blog Detail Page
  if (selectedBlog) {
    const relatedBlogs = BLOGS.filter((b) => b.id !== selectedBlog.id).slice(0, 3);

    return (
      <div className="space-y-16 pb-20">
        {/* Article Header */}
        <section className="bg-navy-950 text-white py-16 border-b border-white/10 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-xs text-teal-400 hover:text-teal-300 font-semibold mb-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Articles</span>
            </Link>

            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                {selectedBlog.category}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {selectedBlog.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight font-display">
              {selectedBlog.title}
            </h1>

            <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center">
                  Z
                </div>
                <div>
                  <p className="text-white font-medium">{selectedBlog.author}</p>
                  <p className="text-[11px] text-slate-400">{selectedBlog.date}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-6 text-slate-700 leading-relaxed">
            <p className="text-lg font-medium text-navy-950 border-l-4 border-blue-600 pl-4 italic">
              {selectedBlog.excerpt}
            </p>

            {selectedBlog.content.map((para, idx) => (
              <p key={idx} className="text-base text-slate-700 leading-relaxed">
                {para}
              </p>
            ))}

            {/* Key Takeaways Box */}
            <div className="my-8 p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h3 className="text-base font-bold text-navy-950 uppercase tracking-wider">
                Key Strategic Takeaways:
              </h3>
              <ul className="space-y-2">
                {selectedBlog.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="text-teal-600 font-bold">•</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="pt-6 border-t border-slate-200 flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Tagged In:</span>
              {selectedBlog.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-navy-950 mb-8 font-display">Related Enterprise Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedBlogs.map((b) => (
              <div
                key={b.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-blue-700 uppercase">{b.category}</span>
                  <h3 className="text-base font-bold text-navy-950 mt-2 mb-2 line-clamp-2 hover:text-blue-700">
                    <Link to={b.url}>{b.title}</Link>
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 mb-4">{b.excerpt}</p>
                </div>
                <Link
                  to={b.url}
                  className="text-xs font-bold text-blue-700 hover:text-blue-900 pt-3 border-t border-slate-100 flex items-center justify-between"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  // Blog Listing Page
  return (
    <div className="space-y-20 pb-20">
      <section className="bg-navy-950 text-white py-20 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/30">
              Thought Leadership & Technical Research
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display">
              Enterprise SAP & Technology Insights
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              In-depth analyses, architecture blueprints, statutory compliance updates, and practical guidance for enterprise leaders and technology professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Blog (Article 7: Clean-Core S/4HANA Strategy) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-navy-950 via-slate-900 to-blue-950 text-white p-8 sm:p-12 border border-white/10 shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30">
              Featured Research • New Analysis
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
              <Link to="/blog/7" className="hover:text-teal-300 transition-colors">
                {BLOGS[6].title}
              </Link>
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {BLOGS[6].excerpt}
            </p>
            <div className="pt-2 flex items-center gap-4">
              <Link
                to="/blog/7"
                className="px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-navy-950 font-bold text-xs transition-colors inline-flex items-center gap-2"
              >
                <span>Read Full Architectural Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-xs text-slate-400">{BLOGS[6].readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Cards Grid (All original 6 articles preserved) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS.slice(0, 6).map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="px-2.5 py-1 rounded bg-slate-100 font-semibold text-slate-700">
                    {blog.category}
                  </span>
                  <span>{blog.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-navy-950 mb-3 group-hover:text-blue-700 transition-colors">
                  <Link to={blog.url}>{blog.title}</Link>
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {blog.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">{blog.date}</span>
                <Link
                  to={blog.url}
                  className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

