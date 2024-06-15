import * as core from '@actions/core'
import * as fs from 'fs'
import * as path from 'path'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const repoPath = process.env.GITHUB_WORKSPACE || ''
    const foundryFilePath = path.join(repoPath, 'foundry.toml')
    if (!fs.existsSync(foundryFilePath)) {
      core.setFailed('foundry.toml file is missing in the root directory.')
      return
    }
    core.info('foundry.toml file found in the root directory.')
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message)
    }
  }
}
