import { DynamicLayout } from '@/app/layouts/DynamicLayout.jsx';
import Root from '@/app/layouts/Root.jsx';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <Root>
            <DynamicLayout>
                <Head title="Dashboard" />
                <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">Hello</div>
            </DynamicLayout>
        </Root>
    );
}
