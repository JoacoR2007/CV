(function () {
        const htmlEl = document.documentElement;
        const themeBtn = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        const langBtn = document.getElementById('lang-toggle');

        function applyTheme(theme) {
            htmlEl.setAttribute('data-theme', theme);
            themeIcon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
            try { localStorage.setItem('cv-theme', theme); } catch (e) {}
        }

        function applyLang(lang) {
            document.querySelectorAll('[data-es]').forEach(function (el) {
                el.textContent = el.getAttribute('data-' + lang);
            });
            langBtn.textContent = lang === 'es' ? 'EN' : 'ES';
            htmlEl.setAttribute('lang', lang);
            try { localStorage.setItem('cv-lang', lang); } catch (e) {}
        }

        let savedTheme = 'dark';
        let savedLang = 'es';
        try {
            savedTheme = localStorage.getItem('cv-theme') || 'dark';
            savedLang = localStorage.getItem('cv-lang') || 'es';
        } catch (e) {}

        applyTheme(savedTheme);
        applyLang(savedLang);

        themeBtn.addEventListener('click', function () {
            themeIcon.classList.remove('icon-spin');
            void themeIcon.offsetWidth; // reinicia la animación
            themeIcon.classList.add('icon-spin');
            const next = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            applyTheme(next);
        });

        langBtn.addEventListener('click', function () {
            const next = (htmlEl.getAttribute('lang') || 'es') === 'es' ? 'en' : 'es';
            applyLang(next);
        });
    })();