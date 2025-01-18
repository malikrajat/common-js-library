import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.js',
            format: 'es',
        },
    ],
    plugins: [
        typescript({
            tsconfig: './tsconfig.json',
            declaration: true,
            declarationDir: 'dist',
            rootDir: 'src',
        }),
        copy({
            targets: [
                { src: 'README.md', dest: 'dist/' },
                { src: 'LICENSE', dest: 'dist/' },
            ],
        }),
    ],
};
