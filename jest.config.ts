import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
    dir: './',
})

const config: Config = {
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    testMatch: ['**/__tests__/**/*.(test|spec).[jt]s?(x)'],
}

export default createJestConfig(config)
