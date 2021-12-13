import vec3, { writeColor } from './vec3.ts';

 async function createImagePPMFile(filename: string, width: number, height: number, maxColor: number): Promise<void>  {
     let imageData = `P3\n${width} ${height}\n${maxColor}\n`;
     for(let j = height-1; j >= 0; j-- ) {
         console.info('Scanlines remaining: ', j);
         for(let i = 0; i < width; i++) {
             const r = i / (width -1);
             const g = j / (height-1);
             const b = 0.25;

             const color = vec3(r,g,b);
             imageData += writeColor(color);
         }
     }
    console.info('Done!')
    await Deno.writeTextFile(`images/${filename}.ppm`, imageData);
}

export default createImagePPMFile;
