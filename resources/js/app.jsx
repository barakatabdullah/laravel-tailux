import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './app/contexts/theme/Provider.jsx';
import { LocaleProvider } from './app/contexts/locale/Provider.jsx';
import { BreakpointProvider } from './app/contexts/breakpoint/Provider.jsx';
import { SidebarProvider } from './app/contexts/sidebar/Provider.jsx';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => title ? `${title} - ${appName}` : appName,
    resolve: (name) => resolvePageComponent(`./pages/${name}.jsx`, import.meta.glob('./pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(

                <ThemeProvider>
                    <LocaleProvider>
                        <BreakpointProvider>
                            <SidebarProvider>
                                <App {...props} />
                            </SidebarProvider>
                        </BreakpointProvider>
                    </LocaleProvider>
                </ThemeProvider>

                );
                },
                progress: {
                color: '#4B5563',
            },
                });

