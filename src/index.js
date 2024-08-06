import './styles/styles.css';
import { homeView } from './views/home';
import { loginView } from './views/login';
import { historyView } from './views/history';
import { addView } from './views/add';
import { renderHeader } from './views/header';

function router() {
    const path = window.location.pathname;
    const app = document.getElementById('app');
    renderHeader();

    switch (path) {
        case '/':
            homeView(app);
            break;
        case '/login':
            loginView(app);
            break;
        case '/history':
            historyView(app);
            break;
        case '/add':
            addView(app);
            break;
        default:
            window.history.pushState({}, '', '/');
            homeView(app);
            break;
    }
}

window.addEventListener('popstate', router);
router();
