"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import folderImage from "@/public/assets/icons/folder.png";
import fileImage from "@/public/assets/icons/file.png";

interface Child {
  id: string;
  isFolder: boolean;
  name: string;
  children: Array<Child>;
}

interface Data {
  root: {
    id: string;
    isFolder: true;
    name: string;
    children: Array<Child>;
  };
}

const DATA: Data = {
  root: {
    id: "root",
    isFolder: true,
    name: "Root",
    children: [
      { id: "1", isFolder: true, name: "Folder Level1", children: [] },
      {
        id: "2",
        isFolder: true,
        name: "Folder level 1",
        children: [
          { id: "4", isFolder: true, name: "Folder level 2", children: [] },
          { id: "5", isFolder: false, name: "File level 2", children: [] },
        ],
      },
      { id: "3", isFolder: false, name: "File level 1", children: [] },
    ],
  },
};

const Folder = (props: { child: Child }) => {
  const { selectedItem, handleItemClick } = useContext(SelectionContext);
  console.log(selectedItem, props.child.id);

  return (
    <div className={`flex flex-col pl-5 `}>
      <div
        className={`flex cursor-pointer`}
        onClick={() => {
          handleItemClick(props.child);
        }}
      >
        <Image
          src={folderImage.src}
          height="20"
          width="20"
          alt="folder-image"
          className={` ${
            selectedItem === props.child.id ? "bg-slate-400 " : ""
          } `}
        ></Image>
        <span
          className={` pl-2 ${
            selectedItem === props.child.id ? "bg-slate-400 " : ""
          }`}
        >
          {props.child.name}
        </span>
      </div>
      <div className="pl-5">
        {props.child.children.map((child) => {
          return child.isFolder ? (
            <Folder key={child.id} child={child} />
          ) : (
            <File child={child} />
          );
        })}
      </div>
    </div>
  );
};

const File = (props: { child: Child }) => {
  const { selectedItem, handleItemClick } = useContext(SelectionContext);
  return (
    <div
      className="flex pl-5 cursor-pointer"
      onClick={() => {
        handleItemClick(props.child);
      }}
    >
      <Image
        src={fileImage.src}
        height="20"
        width="20"
        alt="folder-image"
        className={` pl-2 ${
          selectedItem === props.child.id ? "bg-slate-400 " : ""
        }`}
      ></Image>
      <span
        className={`pl-2 ${
          selectedItem === props.child.id ? "bg-slate-400 " : ""
        }`}
      >
        {props.child.name}
      </span>
    </div>
  );
};

const SelectionContext = React.createContext<{
  selectedItem: undefined | string;
  handleItemClick: any;
}>({
  selectedItem: undefined,
  handleItemClick: () => {},
});

const FileExplorer = () => {
  const [selectedItem, setSelectedItem] = useState<string | undefined>(
    undefined
  );
  const handleItemClick = (child: Child) => {
    setSelectedItem((prev) => {
      if (prev === child.id) return undefined;
      else return child.id;
    });
  };
  const addFolder = () => {};
  const addFile = () => {};
  const [data, setData] = useState(DATA);
  return (
    <div className="p-5">
      <div className="flex pb-2">
        <div
          className="flex w-12 border border-slate-300 cursor-pointer"
          onClick={addFolder}
        >
          <Image
            src={folderImage.src}
            height="20"
            width="20"
            alt="folder-image"
          ></Image>
          <span>+</span>
        </div>
        <div
          className="flex w-12 border border-slate-300 cursor-pointer"
          onClick={addFile}
        >
          <Image
            src={fileImage.src}
            height="20"
            width="20"
            alt="folder-image"
          ></Image>
          <span>+</span>
        </div>
      </div>
      <SelectionContext.Provider
        value={{
          selectedItem,
          handleItemClick,
        }}
      >
        <Folder child={data.root} />
      </SelectionContext.Provider>
    </div>
  );
};

export default FileExplorer;
