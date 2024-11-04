import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const DoughnutChart: React.FC<{data:{label:string,value:number}[]}> = ({data}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const darkTheme = useSelector((state: any) => state.darkTheme);


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = canvas.height = 140;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dmbChart = (
      ctx: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      radius: number,
      arcwidth: number
    ) => {
      const canvasValues = data?.map(item => item.value)
      const canvasColors = darkTheme?["#C6C7F8","#BAEDBD","#95A4FC","#B1E3FF"]:["#1C1C1C", "#95A4FC", "#B1E3FF", "#BAEDBD"];
      
      ctx.lineWidth = arcwidth;
      ctx.lineCap = "round";

      let accum = canvasValues.reduce((a, b) => a + b, 0);

      for (let i = canvasValues.length - 1; i >= 0; i--) {
        const radians = ((canvasValues[i] / accum) * 360 * Math.PI) / 180;

        ctx.beginPath();
        ctx.arc(cx, cy, radius, accum, accum - radians, true);
        ctx.strokeStyle = "#ffffff"; 
        ctx.stroke();

        // Draw colored arc
        ctx.beginPath();
        ctx.arc(cx, cy, radius, accum, accum - radians, true);
        ctx.strokeStyle = canvasColors[i];
        ctx.stroke();

        accum -= radians;
      }

      // Draw final white border to close the chart
      ctx.beginPath();
      ctx.arc(
        cx,
        cy,
        radius,
        accum,
        accum - ((0.1 / 100) * 360 * Math.PI) / 180,
        true
      );
      ctx.strokeStyle = "#ffffff"; // White color for the border
      ctx.stroke();

      // Draw final colored arc
      ctx.beginPath();
      ctx.arc(
        cx,
        cy,
        radius,
        accum,
        accum - ((0.1 / 100) * 360 * Math.PI) / 180,
        true
      );
      ctx.strokeStyle = canvasColors[canvasColors.length - 1];
      ctx.stroke();
    };

    dmbChart(ctx, 70, 70, 50, 20);
  }, [darkTheme]);

  return <canvas ref={canvasRef} id="c" className="w-full"></canvas>;
};

export default DoughnutChart;
