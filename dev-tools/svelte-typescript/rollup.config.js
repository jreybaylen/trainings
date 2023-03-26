import path from 'path'
import image from '@rollup/plugin-image'
import alias from '@rollup/plugin-alias'

const projectRootDir = path.resolve(__dirname)

export default {
    ...otherSettins,
    plugins: [
        ...otherPlugins,
        image(),
        alias({
            entries: [
                {
                    find: '@components',
                    replacement: path.resolve(projectRootDir, 'src/components')
                }
            ]
        })
    ]
}
