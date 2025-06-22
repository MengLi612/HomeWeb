import { Tag } from "antd";
import type { IComponentsItem } from "../Interface/IComponentsItem";

export default function ComponentItem({ label, tags }: IComponentsItem) {
  return (
    <div
      style={{
        height: "200px",
        width: "200px",
        borderRadius: "5px",
        border: "1px solid black",
      }}
    >
      <h3>{label}</h3>
      {tags.map((tag) => (
        <Tag>{tag}</Tag>
      ))}
    </div>
  );
}