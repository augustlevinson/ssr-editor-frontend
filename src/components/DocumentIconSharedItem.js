import { baseUrl } from "../environment";
function DocumentIconSharedItem(props) {
    return (
        <div className="docBlock">
            <div className="docBlockTitle">
                <a href={"./docs/" + props.type + "/" + props.doc_id}>
                    <img className="docBlockIcon" src={"images/" + props.type + "-icon.png"} alt="Document icon" />
                    <h2 key={props.doc_id} className={props.invited ? "disabled" : ""}>
                        {props.title}
                    </h2>
                </a>
                <p className="created">Senast ändrad {props.updated.slice(0, -3)}</p>
                {props.invited ? <a className="small-button medium-blue" href={baseUrl + "/accept/" + props.doc_id}>Acceptera inbjudan</a> : "" }
            </div>
        </div>
    );
}

export default DocumentIconSharedItem;
