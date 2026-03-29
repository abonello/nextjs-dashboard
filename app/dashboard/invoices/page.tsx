export default async function Page() {
    await new Promise((resolve) => setTimeout(resolve, 0));

    return (
        <h1>Invoices</h1>
    );
};