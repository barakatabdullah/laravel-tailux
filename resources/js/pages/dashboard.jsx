import { DynamicLayout } from '@/app/layouts/DynamicLayout.jsx';
import Root from '@/app/layouts/Root.jsx';
import { Head } from '@inertiajs/react';
import 'simplebar-react/dist/simplebar.min.css';

import { Page } from '@/components/shared/Page.jsx';
import '@/styles/index.css';

export default function Dashboard() {
    return (
        <Root>
            <DynamicLayout>
                <Head title="Dashboard" />
                <Page title="Homepage">
                    <div className="transition-content w-full px-(--margin-x) pt-5 lg:pt-6">
                        <div className="min-w-0">
                            <h2 className="truncate text-xl font-medium tracking-wide text-gray-800 dark:text-dark-50">
                                Blank Page
                            </h2>
                        </div>
                    </div>
                </Page>
            </DynamicLayout>
        </Root>
    );
}
