import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Mail, Phone, Linkedin, Send, MessageCircle, Circle, Download, Contact } from 'lucide-react';

const Portfolio = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Bonjour! Je suis le chatbot de ce portfolio. Comment puis-je vous aider aujourd'hui ?", sender: 'bot' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const projects = [
    {
      title: "Analyse des Ventes",
      description: "Analyse approfondie des performances de vente avec visualisation des tendances",
      technologies: ["Python", "Pandas", "Matplotlib"],
      image: "projet_build.png"
    },
    {
      title: "Prédiction de Risque Clients",
      description: "Modèle de machine learning pour prédire le risque de défaut de paiement",
      technologies: ["Python", "Scikit-learn", "Jupyter"],
      image: "projet_build.png"
    },
    {
      title: "Dashboard RH",
      description: "Tableau de bord interactif pour les métriques de ressources humaines",
      technologies: ["Power BI", "SQL", "Excel"],
      image: "projet_build.png"
    },
    {
      title: "Analyse de Sentiment",
      description: "Analyse de sentiments sur des données de médias sociaux",
      technologies: ["Python", "NLTK", "Pandas"],
      image: "projet_build.png"
    }
  ];

  const skills = [
    {
      category: "Langages de Programmation",
      items: ["Python", "SQL", "R", "JavaScript"]
    },
    {
      category: "Outils d'Analyse de Données",
      items: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"]
    },
    {
      category: "Visualisation de Données",
      items: ["Power BI", "Tableau", "Excel", "Google Data Studio"]
    },
    {
      category: "Machine Learning",
      items: ["Régression", "Classification", "Clustering", "Analyse prédictive"]
    },
    {
      category: "Bases de Données",
      items: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"]
    }
  ];

  const botResponses = {
    'bonjour': "Bienvenue ! Je suis le chatbot de ce portfolio de data analyst. Je peux vous donner des informations sur mes projets et compétences.",
    'projets': "J'ai réalisé plusieurs projets principaux : analyses de ventes, prédiction de risques, dashboard RH et analyse de sentiments.",
    'compétences': "Mes principales compétences incluent Python, Pandas, Scikit-learn, SQL, Power BI et l'analyse de données.",
    'contact': "Vous pouvez me contacter par email à votre.email@exemple.com ou via mes réseaux sociaux LinkedIn et GitHub."
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = { text: inputMessage, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const lowerInput = inputMessage.toLowerCase();
      const botResponse = Object.keys(botResponses).find(key => 
        lowerInput.includes(key)
      );

      const responseMessage = {
        text: botResponse 
          ? botResponses[botResponse] 
          : "Je n'ai pas compris votre question. Pouvez-vous la reformuler ?", 
        sender: 'bot'
      };

      setMessages(prev => [...prev, responseMessage]);
    }, 500);

    setInputMessage('');
  };

  return (
    <div className="container mx-auto p-8 font-sans">
      <div className="flex space-x-8 h-screen">
        {/* Section Profil Gauche - Pleine Hauteur */}
        <div className="w-1/3 bg-gray-100 p-6 rounded-lg shadow-md text-center h-full overflow-auto flex flex-col items-center">
          <img 
            src="profile-pic.png" 
            alt="Votre portrait" 
            className="rounded-full mb-4 w-48 h-48 object-cover"
          />
          <h1 className="text-2xl font-bold mb-2">Antoine Tirard</h1>
          
          <div className="flex flex-col space-y-2 items-center w-full">
            <div className="flex items-center">
              <Mail size={20} className="mr-2 text-blue-500"/>
              <a 
                href="mailto:tirardantoine@yahoo.fr" 
                className="text-blue-600 hover:underline"
              >
                tirardantoine@yahoo.fr
              </a>
            </div>
            <div className="flex items-center">
              <Phone size={20} className="mr-2 text-blue-500"/>
              <span>+33 6 73 21 74 34</span>
            </div>
            <div className="flex items-center space-x-3">
              <a 
                href="https://www.linkedin.com/in/antoine-tirard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-75 transition flex items-center"
              >
                <Linkedin size={20} className="text-blue-700 mr-2"/>
                <span className="text-blue-700 hover:underline">Antoine Tirard</span>
              </a>
            </div>
          </div>
        </div>

        {/* Section Contenu Droite - Défilable */}
        <div className="w-2/3 overflow-y-auto h-full">
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-3xl font-bold mb-2">Data Analyst</h2>
            <div className="flex items-center mb-4">
              <button className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                <Circle fill="green" color="green" size={12} className="mr-2"/>
                Disponible
              </button>
            </div>
            <p className="mb-4">
              Passionné de data analysis, je transforme des données brutes en insights stratégiques. 
              Avec une solide formation en statistiques et une expertise en Python et SQL, 
              je développe des solutions data-driven qui aident les entreprises à prendre des décisions éclairées.
            </p>
            <div className="flex space-x-4">
              <a 
                href="/votre-cv.pdf" 
                target="_blank" 
                className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                <Download size={20} className="mr-2"/>
                Mon CV
              </a>
              <a 
                href="mailto:tirardantoine@yahoo.fr" 
                className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
              >
                <Contact size={20} className="mr-2"/>
                Me Contacter
              </a>
            </div>
          </section>

          {/* Section Projets */}
          <section className="mb-6">
            <h2 className="text-3xl font-bold mb-6">Mes Projets</h2>
            <div className="grid grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section Compétences */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Mes Compétences</h2>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skillCategory, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow"
                >
                  <h3 className="font-bold text-xl mb-3 text-gray-700">
                    {skillCategory.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Bouton et Fenêtre de Chat */}
      <button 
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 z-50"
      >
        <MessageCircle size={24} />
      </button>

      {isChatOpen && (
        <div className="fixed bottom-20 right-6 w-96 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col">
          {/* Contenu du chat inchangé */}
        </div>
      )}
    </div>
  );
};

export default Portfolio;