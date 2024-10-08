import React, { useState, useEffect, useRef } from "react";
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';

function DocumentDetails() {
  return (
    <div className="doc-wrapper">
      <Editor
        height="400px"
        defaultLanguage="javascript"
        defaultValue={`
// här skriver du din js-kod!
        

`}
        theme="vs-dark"
    />
    </div>
  );
};

export default DocumentDetails;