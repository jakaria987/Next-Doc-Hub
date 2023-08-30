import React from 'react';

const Proramming = () => {
    return (
        <div className="flex flex-wrap justify-center">
            {languages.map(language => (
                <Link to={language.docsLink} key={language.name} className="block">
                    <div className={`border p-4 m-4 text-center rounded shadow ${language.bgColorClass}`}>
                        <img src={language.logo} alt={`${language.name} Logo`} className="mx-auto h-16" />
                        <h3 className="text-xl font-semibold mt-2">{language.name}</h3>
                        <p className="mt-2">{language.docsText}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Proramming;