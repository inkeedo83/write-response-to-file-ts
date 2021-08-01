/* eslint-disable camelcase */
import { Project } from '../src/common/interfaces';

const projectsData: Project[] = [
  {
    abbreviation: 'foo',
    app_url: 'foo',
    archived: true,
    color: '#6515dd',
    created_at: '2016-12-31T12:30:00Z',
    days_to_thermometer: 123,
    description: 'foo',
    entity_type: 'foo',
    external_id: 'foo',
    follower_ids: ['12345678-9012-3456-7890-123456789012'],
    id: 2,
    iteration_length: 123,
    name: 'foo',
    show_thermometer: true,
    start_time: '2016-12-31T12:30:00Z',
    stats: {
      num_points: 123,
      num_related_documents: 123,
      num_stories: 123
    },
    team_id: 123,
    updated_at: '2016-12-31T12:30:00Z',
    workflow_id: 123
  },
  {
    abbreviation: 'foo',
    app_url: 'foo',
    archived: true,
    color: '#6515dd',
    created_at: '2016-12-31T12:30:00Z',
    days_to_thermometer: 123,
    description: 'foo',
    entity_type: 'foo',
    external_id: 'foo',
    follower_ids: ['12345678-9012-3456-7890-123456789012'],
    id: 1,
    iteration_length: 123,
    name: 'foo',
    show_thermometer: true,
    start_time: '2016-12-31T12:30:00Z',
    stats: {
      num_points: 123,
      num_related_documents: 123,
      num_stories: 123
    },
    team_id: 123,
    updated_at: '2016-12-31T12:30:00Z',
    workflow_id: 123
  }
];

export default projectsData;
