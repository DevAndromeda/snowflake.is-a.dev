export default function Stats({ data = [] }) {
    return (
        <div className="d-flex align-items-center justify-content-center mt-5">
            <table class="table table-striped table-bordered" style={{ maxWidth: "70%", width: "70%" }}>
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((m, i) => {
                            return (
                                <tr key={i}>
                                    <th scope="row">{i + 1}.</th>
                                    <td>{m.title}</td>
                                    <td>{m.value}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
