import React from 'react';
import Structure from '../roadmapstructure';
import '../roadmapstyle.css';
//import { Link } from 'react-router-dom';

const NLPCourse = () => {
    return (
        <div>
            {/* <div className="fixed-button-container">
                            <button className="fixed-button"><Link to="/register">Join Group</Link></button>
                        </div>
            */}
            
            <Structure 
                room="nlp"
                step1="Introduction to Natural Language Processing" 
                step2="Text Preprocessing (Tokenization, Lemmatization, Stop Words)"
                step3="Bag of Words and TF-IDF"
                step4="Text Classification and Sentiment Analysis" 
                inter_step1="Part-of-Speech Tagging" 
                inter_step2="Named Entity Recognition (NER)" 
                inter_step3="Word Embeddings (Word2Vec, GloVe)"
                inter_step4="Language Modeling (N-grams, RNN)" 
                adv_step1="Transformer Models (BERT, GPT)" 
                adv_step2="Text Generation and Summarization" 
                adv_step3="Machine Translation" 
                adv_step4="Advanced NLP Techniques (Attention Mechanism, T5)" 
            />
        </div>
    );
};

export default NLPCourse;
