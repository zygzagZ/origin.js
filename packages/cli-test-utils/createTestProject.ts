import fs from 'fs-extra'
import path from 'path'
import { Options } from 'execa'
import run, { DEMO_PATH } from './execCommands'

export default function createTestProject(
  name: string,
  commandArgs: string[] = ['-d', '-u'],
) {
  const rootDir: string = path.resolve(__dirname, DEMO_PATH)
  const projectRoot: string = path.resolve(rootDir, name)

  const read = (file: string) => {
    return fs.readFile(path.resolve(projectRoot, file), 'utf-8')
  }

  const has = (file: string) => {
    return fs.existsSync(path.resolve(projectRoot, file))
  }

  const write = async (file: string, content: any) => {
    const targetPath = path.resolve(projectRoot, file)
    const dir = path.dirname(targetPath)
    return fs.ensureDir(dir).then(() => fs.writeFile(targetPath, content))
  }

  const rm = (file: string) => {
    return fs.remove(path.resolve(projectRoot, file))
  }

  const clear = () => {
    return fs.remove(projectRoot)
  }

  const args: readonly string[] = ['init', name, ...commandArgs]
  const options: Options<string> = { cwd: rootDir, stdio: 'inherit' }

  return run(args, options).then(() => ({
    dir: projectRoot,
    has,
    read,
    write,
    rm,
    clear,
  }))
}