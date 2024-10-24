import { baseUrl } from "../environment";
function DocumentListSharedItem(props) {
    return (
        <div className="docRow">
            <div className="docRowTitle">
                <img className="docRowIcon" src={"images/" + props.type + "-icon.png"} alt="Document icon" />
                <h2 key={props.doc_id} className={props.invited ? "disabled" : ""}>
                    <a href={"./docs/" + props.type + "/" + props.doc_id}>{props.title}</a>
                </h2>
                {props.invited ? <a className="small-button dark-blue" href={baseUrl + "/accept/" + props.doc_id}>Acceptera inbjudan</a> : "" }
            </div>
            <p className="created">Senast ändrad {props.updated.slice(0, -3)}</p>
        </div>
    );
}

export default DocumentListSharedItem;
