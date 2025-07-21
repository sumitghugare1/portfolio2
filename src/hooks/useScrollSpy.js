import { useEffect, useState } from 'react';

const useScrollSpy = (sections) => {
    const [activeSection, setActiveSection] = useState('');

    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        sections.forEach((section) => {
            const sectionElement = document.getElementById(section);
            if (sectionElement) {
                const sectionTop = sectionElement.offsetTop;
                const sectionHeight = sectionElement.clientHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(section);
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sections]);

    return activeSection;
};

export default useScrollSpy;