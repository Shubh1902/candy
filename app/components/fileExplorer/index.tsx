"use client";
import React, { useEffect, useRef, useState } from "react";
import folderIcon from "./folder.png";
import fileIcon from "./fileNew.png";
import Image from "next/image";
import "./index.css";
interface Child {
  name: string;
  children: Child[];
  isFolder: boolean;
  id: string;
}

const INIT_DATA = {
  id: "root",
  name: "root",
  children: [
    {
      id: "1",
      name: "Child1",
      children: [{ id: "3", name: "File1", children: [], isFolder: false }],
      isFolder: true,
    },
    { id: "2", name: "Child2", children: [], isFolder: true },
  ],
  isFolder: true,
};

const FolderElement = (props: { child: Child }) => {
  const addFolder = () => {
    if (newFolder.active) return;
    setNewFolder((prev) => {
      return { ...prev, active: true };
    });
  };
  const addFile = () => {
    if (newFile.active) return;
    setNewFile((prev) => {
      return { ...prev, active: true };
    });
  };
  const [newFile, setNewFile] = useState({
    active: false,
    name: "",
  });
  const [newFolder, setNewFolder] = useState({
    active: false,
    name: "",
  });

  const handleFolderName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewFolder((prev) => ({ ...prev, name: event.target.value }));
  };
  const handleFileName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewFile((prev) => ({ ...prev, name: event.target.value }));
  };

  const handleFolderSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    props.child.children.unshift({
      isFolder: true,
      name: newFolder.name,
      id: new Date().toString(),
      children: [],
    });
    setNewFolder(() => ({ name: "", active: false }));
  };

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="pl-3 pt-2 folder ">
      <div className="flex ">
        <Image
          src={folderIcon.src}
          height="30"
          width="30"
          alt="Folder Icon"
          onClick={() => setIsOpen((prev) => !prev)}
        ></Image>
        <div>
          <span>{props.child.name}</span>
        </div>
        <div className="flex ">
          <Image
            src={folderIcon.src}
            height="30"
            width="30"
            alt="Folder Icon"
            onClick={addFolder}
          ></Image>
          <div>+</div>
          <Image
            src={fileIcon.src}
            height="30"
            width="30"
            alt="File Icon"
            onClick={addFile}
          ></Image>
          <div>+</div>
        </div>
      </div>
      <div className="">
        {newFolder.active && (
          <div>
            <form onSubmit={handleFolderSubmit}>
              <input
                type="text"
                value={newFolder.name}
                placeholder="Folder name"
                onChange={handleFolderName}
              ></input>
            </form>
          </div>
        )}
        {isOpen &&
          props.child.children.map((child) => {
            return (
              <div>
                {child.isFolder ? (
                  <FolderElement key={child.id} child={child} />
                ) : (
                  <FileELement key={child.id} child={child} />
                )}
              </div>
            );
          })}
        {newFile.active && (
          <div>
            <input
              type="text"
              value={newFile.name}
              placeholder="File name"
              onChange={handleFileName}
            ></input>
          </div>
        )}
      </div>
    </div>
  );
};

const FileELement = (props: { child: Child }) => {
  return (
    <div className="flex pl-3 pt-3 folder">
      <Image src={fileIcon.src} height="30" width="30" alt="File Icon"></Image>
      <div>
        <span>{props.child.name}</span>
      </div>
    </div>
  );
};

const FileExplorer = () => {
  const data = useRef(INIT_DATA);

  return (
    <>
      <div>File Explorer Interview Question</div>
      <div>
        <FolderElement child={data.current} />
      </div>
    </>
  );
};

export default FileExplorer;
