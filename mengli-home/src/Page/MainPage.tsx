import {
  BilibiliOutlined,
  CodeSandboxOutlined,
  CustomerServiceOutlined,
  EyeOutlined,
  ForwardOutlined,
  FullscreenExitOutlined,
  GithubOutlined,
  HeartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Flex } from "antd";
import { generateRandomVector2sInArea } from "../TS/Random/RandomVector2";
import { useEffect, useState } from "react";

export default function MainPage() {

  const randomVector2s = generateRandomVector2sInArea(
    1000,
    300,
    { x: 500, y: 150 },
    8
  );

  return (
    <>
      <div style={{ height: "100%", width: "100%" }}>
        <Flex
          align="center"
          justify="center"
          style={{ height: "100%", width: "100%" }}
        >
          <div style={{ position: "relative" }}>
            <Avatar size={72} icon={<UserOutlined />} />
            <Bubble
              style={{
                position: "absolute",
                left: `${randomVector2s[0].x}px`,
                top: `${randomVector2s[0].y}px`,
              }}
              icon={
                <ForwardOutlined
                  style={{ fontSize: "24px", color: "rgb(255, 96, 189)" }}
                />
              }
            />
            <Bubble
              style={{
                position: "absolute",
                left: `${randomVector2s[1].x}px`,
                top: `${randomVector2s[1].y}px`,
              }}
              icon={
                <FullscreenExitOutlined
                  style={{ fontSize: "24px", color: "rgb(250, 110, 191)" }}
                />
              }
            />
            <Bubble
              style={{
                position: "absolute",
                left: `${randomVector2s[2].x}px`,
                top: `${randomVector2s[2].y}px`,
              }}
              icon={
                <GithubOutlined
                  style={{ fontSize: "24px", color: "rgb(255, 106, 193)" }}
                />
              }
            />
            <Bubble
              style={{
                position: "absolute",
                left: `${randomVector2s[3].x}px`,
                top: `${randomVector2s[3].y}px`,
              }}
              icon={
                <CodeSandboxOutlined
                  style={{ fontSize: "24px", color: "rgb(255, 97, 189)" }}
                />
              }
            />
            <Bubble
              style={{
                position: "absolute",
                left: `${randomVector2s[4].x}px`,
                top: `${randomVector2s[4].y}px`,
              }}
              icon={
                <BilibiliOutlined
                  style={{ fontSize: "24px", color: "rgb(255, 110, 195)" }}
                />
              }
            />
            <Bubble
              style={{
                position: "absolute",
                left: `${randomVector2s[5].x}px`,
                top: `${randomVector2s[5].y}px`,
              }}
              icon={
                <EyeOutlined
                  style={{ fontSize: "24px", color: "rgb(255, 97, 189)" }}
                />
              }
            />
            <Bubble
              style={{
                position: "absolute",
                left: `${randomVector2s[6].x}px`,
                top: `${randomVector2s[6].y}px`,
              }}
              icon={
                <HeartOutlined
                  style={{ fontSize: "24px", color: "rgb(255, 102, 191)" }}
                />
              }
            />
            <Bubble
              style={{
                position: "absolute",
                left: `${randomVector2s[7].x}px`,
                top: `${randomVector2s[7].y}px`,
              }}
              icon={
                <CustomerServiceOutlined
                  style={{ fontSize: "24px", color: "rgb(255, 104, 202)" }}
                />
              }
            />
          </div>
        </Flex>
      </div>
    </>
  );
}

interface BubbleProps {
  size?: number;
  icon?: React.ReactNode;
  maxOffset?: number;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export function Bubble({
  size = 50,
  icon,
  maxOffset = 20,
  style,
}: BubbleProps) {
  const [scale, setScale] = useState(0);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScale(1);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset({
        x: Math.random() * maxOffset * 2 - maxOffset,
        y: Math.random() * maxOffset * 2 - maxOffset,
      });
    }, 2000);

    setOffset({
      x: Math.random() * maxOffset * 2 - maxOffset,
      y: Math.random() * maxOffset * 2 - maxOffset,
    });

    return () => clearInterval(interval);
  }, [maxOffset]);

  const handleClick = () => {
    setScale(1.5);

    setTimeout(() => {
      setScale(0);
    }, 200);

    setTimeout(() => {
      setIsVisible(false);
    }, 500);

    setTimeout(() => {
      setIsVisible(true);
      setScale(1);
    }, 1500);
  };

  return isVisible ? (
    <div
      style={{
        position: "absolute",
        transition: "transform 2s ease-in-out",
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        ...style,
      }}
    >
      <button
        onClick={handleClick}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: size,
          height: size,
          borderRadius: "50%",
          backgroundColor: "rgba(182, 227, 255, 0.51)",
          border: "none",
          transition: "transform 0.5s ease-in-out",
          transform: `scale(${scale})`,
          cursor: "pointer",
          outline: "none",
          boxShadow: "0 0 10px rgba(0, 221, 255, 0.5)",
        }}
      >
        {icon}
      </button>
    </div>
  ) : null;
}
