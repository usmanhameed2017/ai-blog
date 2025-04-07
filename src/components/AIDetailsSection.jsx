import React from 'react';
import '../css/AIDetailsSection.css';

function AIDetailsSection() {
    return (
        <section className="ai-details-section">
            <div className="section-header">
                <h2 className='section-title_for_ai_details'>The Impact of Artificial Intelligence</h2>
            </div>
            <div className="section-content">
                <p className="content-paragraph">
                    Artificial Intelligence (AI) is no longer just a concept of science fiction. It has become a critical technology revolutionizing industries and impacting every aspect of our lives. From healthcare to finance, AI is helping businesses solve complex problems, improve efficiency, and unlock new opportunities.
                </p>
                <p className="content-paragraph">
                    One of the most significant contributions of AI has been in healthcare. AI algorithms are used to analyze medical data, diagnose diseases, and personalize patient care. This technology has the potential to save lives, optimize treatments, and improve the quality of healthcare globally.
                </p>
                <p className="content-paragraph">
                    In the finance industry, AI is used for predictive analysis, fraud detection, and automated trading. AI is revolutionizing financial services by enabling better decision-making, faster processing, and enhanced customer experiences.
                </p>
                <p className="content-paragraph">
                    As AI continues to evolve, its applications are expanding into various sectors, including education, transportation, and entertainment. AI is not just improving existing processes, but it is also paving the way for innovative new services that were previously unimaginable.
                </p>
            </div>
        </section>
    );
}

export default AIDetailsSection;