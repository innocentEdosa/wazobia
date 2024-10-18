import CreatePost from "./container/createPost";

const App = () => {
  return (
    <>
      <CreatePost />
    </>
  );
};

export default App;

// import React, { useState } from 'react';

// interface Node {
//   type: string;
//   content?: string;
//   attrs?: { [key: string]: any };
// }

// type DocumentModel = Node[];

// const CustomEditor: React.FC = () => {
//   const [doc, setDoc] = useState<DocumentModel>([]);
//   const [isFocused, setIsFocused] = useState<boolean>(false);

//   // Track active formatting
//   const [isBold, setIsBold] = useState<boolean>(false);
//   const [isItalic, setIsItalic] = useState<boolean>(false);
//   const [isUnderline, setIsUnderline] = useState<boolean>(false);
//   const [isStrikeThrough, setIsStrikeThrough] = useState<boolean>(false);

//   // Function to add new nodes to the document
//   const addNode = (type: string) => {
//     const newNode = { type, content: type === 'image' ? '' : `New ${type}` };
//     setDoc([...doc, newNode]);
//   };

//   // Function to handle focus on editor
//   const handleFocus = () => {
//     setIsFocused(true);
//   };

//   // Function to handle blur on editor (when focus is lost)
//   const handleBlur = () => {
//     setIsFocused(false);
//   };

//   // Function to render a node
//   const renderNode = (node: Node, index: number) => {
//     switch (node.type) {
//       case 'heading':
//         return (
//           <h1 contentEditable key={index}>
//             {node.content}
//           </h1>
//         );
//       case 'paragraph':
//         return (
//           <p contentEditable key={index}>
//             {node.content}
//           </p>
//         );
//       case 'image':
//         return <img key={index} src={node.attrs?.src || ''} alt="Uploaded Image" />;
//       case 'link':
//         return (
//           <a
//             key={index}
//             href={node.attrs?.href || '#'}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {node.content}
//           </a>
//         );
//       default:
//         return null;
//     }
//   };

//   // Simulating image upload handler
//   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const newNode = {
//         type: 'image',
//         attrs: { src: URL.createObjectURL(file) },
//       };
//       setDoc([...doc, newNode]);
//     }
//   };

//   // Helper function to apply formatting to selected text
//   const applyFormatting = (command: string) => {
//     document.execCommand(command, false);
//   };

//   // Toggle formatting functions
//   const toggleBold = () => {
//     setIsBold(!isBold);
//     applyFormatting('bold');
//   };

//   const toggleItalic = () => {
//     setIsItalic(!isItalic);
//     applyFormatting('italic');
//   };

//   const toggleUnderline = () => {
//     setIsUnderline(!isUnderline);
//     applyFormatting('underline');
//   };

//   const toggleStrikeThrough = () => {
//     setIsStrikeThrough(!isStrikeThrough);
//     applyFormatting('strikeThrough');
//   };

//   // Maintain a state of active formatting and apply it continuously
//   const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
//     // Apply bold formatting to new text if the bold state is active
//     if (isBold) applyFormatting('bold');
//     if (isItalic) applyFormatting('italic');
//     if (isUnderline) applyFormatting('underline');
//     if (isStrikeThrough) applyFormatting('strikeThrough');
//   };

//   return (
//     <div>
//       {/* Editable content area */}
//       <div
//         contentEditable
//         onFocus={handleFocus}
//         onBlur={handleBlur}
//         onKeyDown={handleKeyDown} // Listen for keystrokes
//         className="editor"
//         style={{ border: '1px solid #ccc', minHeight: '200px', padding: '10px' }}
//       >
//         {doc.map((node, index) => renderNode(node, index))}
//       </div>

//       {/* Show toolbar only when the editor is focused */}
//       {true && (
//         <div className="toolbar" style={{ marginTop: '10px' }}>
//           <button onClick={() => addNode('heading')}>Add Heading</button>
//           <button onClick={() => addNode('paragraph')}>Add Paragraph</button>
//           <button onClick={() => addNode('listItem')}>Add List Item</button>
//           <input type="file" accept="image/*" onChange={handleImageUpload} />
//           <button onClick={() => addNode('link')}>Add Link</button>

//           {/* Text formatting buttons */}
//           <button
//             onClick={toggleBold}
//             style={{ fontWeight: isBold ? 'bold' : 'normal' }}
//           >
//             Bold
//           </button>
//           <button
//             onClick={toggleItalic}
//             style={{ fontStyle: isItalic ? 'italic' : 'normal' }}
//           >
//             Italic
//           </button>
//           <button
//             onClick={toggleUnderline}
//             style={{
//               textDecoration: isUnderline ? 'underline' : 'none',
//             }}
//           >
//             Underline
//           </button>
//           <button
//             onClick={toggleStrikeThrough}
//             style={{
//               textDecoration: isStrikeThrough ? 'line-through' : 'none',
//             }}
//           >
//             Strikethrough
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomEditor;
