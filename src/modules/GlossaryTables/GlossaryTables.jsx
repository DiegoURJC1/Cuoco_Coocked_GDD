import {Heading2} from "../Heading/Heading.jsx";

export function GlossaryTables({ glossary, glossaryCategory }) {
    const grouped = Object.entries(glossary).reduce((acc, [, item]) => {
        const categories = item.categories || [];

        categories.forEach((cat) => {
            if (!acc[cat]) acc[cat] = [];
            acc[cat].push(item);
        });

        return acc;
    }, {});

    return (
        <>
            {Object.entries(glossaryCategory).map(([key, label]) => {
                const items = grouped[label];

                if (!items || items.length === 0) return null;

                return (
                    <section key={key}>
                        <Heading2 id={key.toLowerCase()}>
                            {label}
                        </Heading2>

                        <table style={{ borderCollapse: "separate",
                            borderSpacing: "12px" }}>
                            <thead>
                            <tr>
                                <th>Término</th>
                                <th>Descripción</th>
                            </tr>
                            </thead>
                            <tbody>
                            {items.map((item) => (
                                <tr key={item.id} id={item.id}>
                                    <td><b>{item.name}</b></td>
                                    <td>{item.content}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </section>
                );
            })}
        </>
    );
}