import { baseUrl } from "../environment";

function CreateDocument() {
    return (
        <div className="main">
            <div className="create-doc-wrapper">
                <a className="create-doc" href={`${baseUrl}/create/text`}><img src="images/text-icon.png" /><h2>Nytt textdokument</h2></a>
                <a className="create-doc" href={`${baseUrl}/create/code`}><img src="images/code-icon.png" /><h2>Nytt koddokument</h2></a>
            </div>
        </div>
    );
}

export default CreateDocument;
