import { siteConfig } from '@/data/site-config'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-responsive-lg font-bold text-gray-800 mb-6">
              {siteConfig.about.title}
            </h2>
            <p className="text-xl text-primary-600 font-semibold mb-4">
              {siteConfig.about.subtitle}
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {siteConfig.about.description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {siteConfig.about.features.map((feature, index) => (
              <div 
                key={index} 
                className="card hover-lift text-center animate-fadeIn"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Vision Statement */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Our Vision
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  To create the most accessible and welcoming table tennis environment in Australia, 
                  where players of all ages and abilities can enjoy the sport they love.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">
                      <strong>Inclusive Community:</strong> Welcoming environment for veterans, families, and newcomers
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">
                      <strong>Social & Competitive:</strong> From casual social play to serious competitive training
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">
                      <strong>Professional Excellence:</strong> Highest standards in facilities and coaching
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop" 
                    alt="Table Tennis Central Facility"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating stats */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-primary-600">10+</div>
                  <div className="text-sm text-gray-600">Professional Tables</div>
                </div>
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-primary-600">365</div>
                  <div className="text-sm text-gray-600">Days Open</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Experience Table Tennis Central?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Join our community and discover why we're Australia's premier table tennis destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Book Your Table
              </button>
              <button className="btn-secondary">
                Take a Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}