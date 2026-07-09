import {
  BookOpen,
  BriefcaseBusiness,
  ChartColumn,
  CircleDollarSign,
  Heart,
  UserRound,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type LifeArea = {
  label: string;
  shortLabel?: string;
  description: string;
  progress: number;
  icon: LucideIcon;
  color: string;
  glow: string;
  active?: boolean;
  hideOnMobileMap?: boolean;
  mapPosition: {
    desktop: {
      x: number;
      y: number;
    };
    mobile: {
      x: number;
      y: number;
    };
  };
};

export const lifeAreas: LifeArea[] = [
  {
    label: "Career",
    description: "Get first IT job",
    progress: 72,
    icon: BriefcaseBusiness,
    color: "#6847ff",
    glow: "rgba(104, 71, 255, 0.2)",
    active: true,
    mapPosition: {
      desktop: {
        x: 50,
        y: 12,
      },
      mobile: {
        x: 50,
        y: 12,
      },
    },
  },
  {
    label: "Business",
    description: "Build Nexus to MVP",
    progress: 58,
    icon: ChartColumn,
    color: "#2096f3",
    glow: "rgba(32, 150, 243, 0.18)",
    mapPosition: {
      desktop: {
        x: 77,
        y: 26,
      },
      mobile: {
        x: 77,
        y: 31,
      },
    },
  },
  {
    label: "Finance",
    description: "Financial freedom",
    progress: 64,
    icon: CircleDollarSign,
    color: "#31c66c",
    glow: "rgba(49, 198, 108, 0.18)",
    mapPosition: {
      desktop: {
        x: 83,
        y: 59,
      },
      mobile: {
        x: 77,
        y: 69,
      },
    },
  },
  {
    label: "Health",
    description: "Be in best shape",
    progress: 60,
    icon: Heart,
    color: "#ff4f58",
    glow: "rgba(255, 79, 88, 0.18)",
    hideOnMobileMap: true,
    mapPosition: {
      desktop: {
        x: 65,
        y: 84,
      },
      mobile: {
        x: 72,
        y: 82,
      },
    },
  },
  {
    label: "Learning",
    description: "AI & System Design",
    progress: 80,
    icon: BookOpen,
    color: "#ff9637",
    glow: "rgba(255, 150, 55, 0.2)",
    mapPosition: {
      desktop: {
        x: 35,
        y: 84,
      },
      mobile: {
        x: 50,
        y: 88,
      },
    },
  },
  {
    label: "Relationships",
    description: "Stronger connections",
    progress: 55,
    icon: UsersRound,
    color: "#ef5bc0",
    glow: "rgba(239, 91, 192, 0.18)",
    mapPosition: {
      desktop: {
        x: 17,
        y: 59,
      },
      mobile: {
        x: 23,
        y: 69,
      },
    },
  },
  {
    label: "Personal",
    description: "Build discipline",
    progress: 48,
    icon: UserRound,
    color: "#747d9f",
    glow: "rgba(116, 125, 159, 0.18)",
    mapPosition: {
      desktop: {
        x: 23,
        y: 26,
      },
      mobile: {
        x: 23,
        y: 31,
      },
    },
  },
];
