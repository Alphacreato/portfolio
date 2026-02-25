import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot  = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  let rx = 0, ry = 0;

  useEffect(() => {
    let mx = 0, my = 0, id: number;

    const move = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    const loop = () => {
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      if (dot.current)  { dot.current.style.left  = mx + "px"; dot.current.style.top  = my + "px"; }
      if (ring.current) { ring.current.style.left = rx + "px"; ring.current.style.top = ry + "px"; }
      id = requestAnimationFrame(loop);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      t.closest("a,button,.pcard,.pill,.btn") ? ring.current?.classList.add("big") : ring.current?.classList.remove("big");
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    id = requestAnimationFrame(loop);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); cancelAnimationFrame(id); };
  }, []);

  return (<><div ref={dot} className="c-dot" /><div ref={ring} className="c-ring" /></>);
}
