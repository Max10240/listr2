import type { SimpleRenderer } from './renderer'
import type { Task } from '@lib'
import type { RendererPresetTimer, RendererPresetTimestamp } from '@presets'
import type { ListrLogLevels, ListrLoggerStyleMap, RendererLoggerOptions } from '@utils'

export type ListrSimpleRendererTask = Task<any, typeof SimpleRenderer>

export interface ListrSimpleRendererOptions extends RendererPresetTimer, RendererPresetTimestamp, RendererLoggerOptions<ListrLogLevels>, ListrLoggerStyleMap<ListrLogLevels> {}

export interface ListrSimpleRendererTaskOptions extends RendererPresetTimer {}