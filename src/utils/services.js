import React from "react"
import { FaJs, FaPython, FaDatabase } from "react-icons/fa"
import {
  FadeInBottom,
  FadeInLeft,
  FadeInRight,
} from "../components/layout/scroll/Scroll.styles"
export default [
  {
    id: "front",
    icon: <FaJs className="service-icon" />,
    title: "Frontend",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
    container: <FadeInRight />,
  },
  {
    id: "back",
    icon: <FaPython className="service-icon" />,
    title: "Backend",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
    container: <FadeInBottom />,
  },
  {
    id: "db",
    icon: <FaDatabase className="service-icon" />,
    title: "DB",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
    container: <FadeInLeft />,
  },
]
